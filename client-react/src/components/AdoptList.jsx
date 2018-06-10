import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class AdoptList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adoptables: []
    }
    this.refactorPetFinderData = this.refactorPetFinderData.bind(this);
  }
  
  componentDidMount() {
    if(this.props.match) {
      axios.post('/adopt', {
        breedName: this.props.match.params.breed,
        zipCode: this.props.match.params.zip
      })
      .then(res => {
        var refactoredData = this.refactorPetFinderData(res.data.pet);
        this.setState({
          adoptables: refactoredData
        })
      }).catch(err => {
        console.error(err);
      }) 
    }
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
            sex: dog.sex.$t
          };
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
  
  render() {
    if(this.state.adoptables) {
      if(this.state.adoptables.length === 0) {
        return (
          <div className="loading-div">
            <p className="loading-text">Going to space and looking for doggos . . .</p>
          </div>
        )
      }
      return (
        <div className="AdoptList flex big-container">
        {this.state.adoptables.map((dog, i)=>{
          return(
            <div key={i} className="flex list-item container">
              <div className='adopt-rightside'>
                <img src={dog.photo} width='250' height= '260'/>
                <a href={`mailto;${dog.email}`} target='_self'><button className = 'adopt-me'>Adopt me!</button></a>
              </div>
              <div className="item-text">
                <h2>Name: {dog.name}</h2>
                <p>{dog.description}</p>
                <div className="flex zip-age">
                  <h4>Age: {dog.age}</h4>
                  <h4>Sex: {dog.sex}</h4>
                  <h4>Zip Code: {dog.zip}</h4>
                </div>
              </div>
            </div>
          )
        })}  
        </div>
      )
    } else {
      return (
        <div className="no-adoptables-div">
          <img className="no-adoptables-img" src={'https://i0.wp.com/alawalnews.net/wp-content/uploads/2018/04/do.jpg?ssl=1'}/>
          <p className="no-adoptables-text">There are no dogs of this breed for adoption in your area :( </p>
        </div>
      )
    }
  }
}
 
  export default AdoptList;

  ReactDOM.render(<AdoptList />, document.getElementById('app'));
