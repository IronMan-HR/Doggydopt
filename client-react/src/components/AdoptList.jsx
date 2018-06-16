import React from 'react';
import axios from 'axios';
import DogSearch from './DogSearch.jsx';
import {Redirect} from 'react-router';

class AdoptList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adoptables: [],
      unfiltered: [],
      redirect: false,
    }
    this.refactorPetFinderData = this.refactorPetFinderData.bind(this);
    this.searchDogs = this.searchDogs.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.getAndHighlightFaves = this.getAndHighlightFaves.bind(this);
  }
  
  componentDidMount() {
    if(this.props.match) {
      axios.post('/adopt', {
        breedName: this.props.match.params.breed,
        zipCode: this.props.match.params.zip
      })
      .then(res => {
        //console.log('dog data is', res.data.pet);
        var refactoredData = this.refactorPetFinderData(res.data.pet);
        this.setState({
          adoptables: refactoredData,
          unfiltered: refactoredData,
        });
      })
      .then(() => {
        this.getAndHighlightFaves();
      })
      .catch(err => {
        console.error(err);
      })
    }
  }

  getAndHighlightFaves() {
    axios.get('/faves', {
      params: { username: this.props.username}
    })
    .then(res => {
      //console.log('res.data is', res.data)
      var favoriteIds = res.data.map(favorite => {
        return favorite.dog_id;
      });
      this.state.unfiltered.forEach(dog => {
        if (favoriteIds.includes(dog.id)) {
          document.getElementById(dog.id).classList.add('favorited');
        } else {
          document.getElementById(dog.id).classList.remove('favorited');
        }
      });
    })
    .catch(err => {
      console.error(err);
    });
  }

  refactorPetFinderData(data) {
    // FILTERING ONLY THE NECESSARY DATA

    if(data) {
      return (
        data.map(dog => {
          var compressed = {
            name: dog.name.$t,
            age: dog.age.$t,
            description: dog.description.$t,
            zip: dog.contact.zip.$t,
            email: dog.contact.email.$t,
            sex: dog.sex.$t,
            fullDogObj: dog,
            id: dog.id.$t,
            favorite: '',
          };
          //console.log(dog.options.option);
          if (dog.options.option !== undefined) {
            if (Array.isArray(dog.options.option)) {
              compressed.options = dog.options.option.map(trait => {
                return trait.$t;
              });
            } else {
              compressed.options = [dog.options.option.$t];
            }
          } else {
            compressed.options = [];
          }
           
          // SOME DOGS DON'T HAVE A PICTURE OR PICTURES IN BAD FORMATS. THE SIZE FORMATS "x" AND "pn" WORK FOR US
          // WE CHECK IF ONE OF THOSE IS AVAILABLE (PREFERABLY "x"), AND SET IT AS PHOTO, IF NOT WE GIVE IT A PLACEHOLDER
          if(dog.media.photos) {
            var pics = {};
            dog.media.photos.photo.forEach(photo => {
              if(photo['@size'] === 'x' || photo['@size'] === 'pn') {
                if(!pics.hasOwnProperty(photo['@size'])) {
                  pics[photo['@size']] = photo.$t;
                }
              }
            })
            if(pics.hasOwnProperty('x')) {
              compressed.photo = pics.x;
            } else if (pics.hasOwnProperty('pn')) {
              compressed.photo = pics.pn;
            } else {
              compressed.photo = 'http://www.dohyokennels.com/img/dog-placeholder.jpg';
            }
          }
          return compressed;
        })
      )
    } else {
      return undefined;
    }
  }

  searchDogs(params) {
    var allDogs;

    //Checks to see if this is the first the filter is being used, if yes than a copy of all the breeds is kept in the state as unfiltered so additional api calls are unnecssary.
    if(this.state.unfiltered.length === 0){
      allDogs = this.state.adoptables.slice();
    } else {
      allDogs = this.state.unfiltered.slice();
    };

    //If all the selections are 'unselected' or zero, than all the dogs are shown.
    if(params.favorite.length + params.sex.length + params.age.length + params.options.length === 0){
      this.setState({
        adoptables: allDogs,
        unfiltered: allDogs,
      });
    } else {
      //Based on the selection, certain dogs are shown and others are not.
      var createSelector = (dog, category) => {
        if (params[category].length !== 0) {
          if (category === 'options') {
            if (params.options.includes('catsOk') && dog.options.includes('noCats')) {
              return false;
            } else if (params.options.includes('kidsOk') && dog.options.includes('noKids')) {
              return false;   
            } else {
              return params.options.every(characteristic => {
                if (characteristic === 'kidsOk' || characteristic === 'catsOk') {
                  return true;
                } else {
                  return dog.options.includes(characteristic);
                }   
              });
            }
          } else if (category === 'favorite') {
            return this.state.favorites.includes(dog.id);
          } else {
            return params[category].some(characteristic => {
              return characteristic === dog[category];
            }); 
          }   
        } else {
          return true;
        }
      }

      var filteredDogs = allDogs.filter(dog => {
        var favoriteSelect = createSelector(dog, 'favorite');
        var sexSelect = createSelector(dog, 'sex');
        var ageSelect = createSelector(dog, 'age');
        var optionsSelect = createSelector(dog, 'options');

        return favoriteSelect && sexSelect && ageSelect && optionsSelect;
      }); //end of filter

      this.setState({
        adoptables: filteredDogs,
        unfiltered: allDogs,
      });
    }; //end of if else
  } //end of search()

  toggleFavorite(dog) {
    if (this.props.userIsAuthenticated && this.props.username !== '') {
      document.getElementById(dog.id).classList.toggle('favorited');
      dog = dog.fullDogObj;
      let dog_id = dog.id.$t;
      axios.get('/faveStatus', {params: {dog_id, username: this.props.username}})
        .then(({data}) => {
          if (data.length) {
            // functionality for deleting the dog from Users_FaveDogs
            axios.delete('/faves', {params: {dog_id, username: this.props.username}})
              .then(data => console.log('unfaved dog', dog_id))
              .catch(err => console.log('error unfaving dog', err));
          } else {
            // functionality for adding the dog to FaveDogs and to Users_FaveDogs
            axios.post('/faves', {dog, username: this.props.username})
            .then(res => console.log('faved dog!', res))
            .catch(err => console.error('error faving dog!', err));
          }
        })
        .catch(err => console.error(err));
    } else {
      this.setState({
        redirect: true,
      })
    }    
  }
  
  render() {
    if (this.state.redirect) {
      return (<Redirect to="/login" />);
    } else if (!this.state.adoptables) {
      return (
        <div className="loading-div">
          <p className="loading-text">Going to space and looking for doggos . . .</p>
        </div>
      )
    // } else if (this.state.adoptables.length === 0 && this.state.unfiltered.length > 0) {
    //     return (
    //       <div className="no-adoptables-div">
    //         <img className="no-adoptables-img" src={'https://i0.wp.com/alawalnews.net/wp-content/uploads/2018/04/do.jpg?ssl=1'}/>
    //         <p className="no-adoptables-text">There are no dogs of this breed for adoption in your area :( </p>
    //       </div>
    //     )
    } else {
      return (
        
        <div className="below-header">
          <DogSearch searchDogs={this.searchDogs}/>
          <div className="breeds-right-side">
            <h1>Step 2: Pick your dog! Showing {`${this.props.match.params.breed}s in ${this.props.match.params.zip}`}</h1>
            <div className="breed-container flex">  
              {this.state.adoptables.map((dog, i)=>{
                return(
                  <div key={i} className="list-item">
                    <img className="doggy-pic" src={dog.photo} />
                    <div className="item-text"> 
                      <h1>{dog.name}</h1>
                      <p>{dog.description}</p>
                      <div className="dog-buttons">
                        <button id={`${dog.id}`} className="favorite" onClick={() => {this.toggleFavorite(dog)}}></button>  
                        <button className="email"><a href={`mailto:${dog.email}?subject=I would like to adopt ${dog.name}!&body=Hello! I was looking at ${dog.name} and I believe we would have the most amazing adventures together. I would like to meet and see if the feeling is mutual. Please let me know if you have any other questions!`} target='_self'></a></button>
                      </div>
                      {/* <div className="flex zip-age">
                        <h4>Age: {dog.age}</h4>
                        <h4>Sex: {dog.sex}</h4>
                        <h4>Zip Code: {dog.zip}</h4>
                      </div> */}
                    </div>
                  </div>
                )
              })} 
            </div>  
          </div>  
        </div>
      )
    }
  }
}
 
  export default AdoptList;
