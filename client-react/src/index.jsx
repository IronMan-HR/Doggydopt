import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import exampleData from '../../exampleData.js';
import axios from 'axios';
import Home from './components/Home.jsx';
import AdoptList from './components/AdoptList.jsx';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: exampleData,
      adoptables: [],
      homeView: true   
    } 
    this.clickHandler = this.clickHandler.bind(this);
    this.search = this.search.bind(this);
    this.findMyMatch = this.findMyMatch.bind(this);
    this.refactorPetFinderData = this.refactorPetFinderData.bind(this);
  }

  componentDidMount() {
    axios.get('/breeds/all')
    .then(res => {
      this.setState({
        breeds: res.data
      });
    }).catch(err => {
      console.error(err);
    })
  }

  refactorPetFinderData(data) {
    // FILTERING ONLY THE NECESSARY DATA
    return (
      data.map(dog => {
        var compressed = {
          name: dog.name.$t,
          age: dog.age.$t,
          description: dog.description.$t,
          zip: dog.contact.zip.$t
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
            compressed.photo = '../dist/images/placeholderDog.jpg'
          }
        }
        return compressed;
      })
    )
  }  

  clickHandler(breed) {
    axios.post('/adopt', {
      breedName: breed.breed,
      zipCode: 10017 // HARDCODED
    })
    .then(res => {
      var refactoredData = this.refactorPetFinderData(res.data.pet);
      console.log(refactoredData);
      this.setState({
        adoptables: refactoredData
      })
    }).catch(err => {
      console.error(err);
    }) 
  }

  search(params) {
    axios.post('/breeds', params)
    .then(res => {
      this.setState({
        breeds: res.data
      })
    }).catch(err => {
      console.error(err);
    })
  }

  findMyMatch() {
    this.setState({
      homeView: false
    })
  }

  render () {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/matchMe" render={() => {
          <div className="columns is-gapless">
              <Search search={this.search}/>
              <List breeds={this.state.breeds} clickHandler={this.clickHandler}/>
          </div>
        }}/>
        <Route exact={true} path="/adoptables" render={() => {
          <AdoptList dogs={this.state.adoptables}/>;
        }}/>
      </Switch>
    )
  }
}


ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));
