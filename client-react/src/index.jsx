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
      // adoptables: [],
      homeView: true,
      unfiltered: []   
    } 
    this.search = this.search.bind(this);
    this.addDefaultSrc = this.addDefaultSrc.bind(this);
    this.searchNow = this.searchNow.bind(this);
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

  searchNow(params) {
    var allBreeds;
    if(this.state.unfiltered.length === 0){
     allBreeds = this.state.breeds.slice();
    } else {
     allBreeds = this.state.unfiltered.slice();
    }

    if(params.size.length + params.energy.length + params.hair.length + params.playful.length === 0){
      this.setState({
        breeds: allBreeds,
        unfiltered: allBreeds
      });
    } else {
      var filteredBreeds = allBreeds.filter((breed)=>{
        var energySelect = params.energy.some((characteristic)=>{
          return characteristic === breed.exercise;
        });
        var hairSelect = params.hair.some((characteristic)=>{
          return characteristic === breed.shedding;
        });
        var playfulSelect = params.playful.some((characteristic)=>{
          return characteristic === breed.biddability;
        });
        var sizeSelect;
        var min_weight = 0;
        var max_weight = 0;
        params.size.forEach((characteristic)=>{
          if(characteristic === 'small'){
            min_weight = 0;
            max_weight = 25;
          }
          if(characteristic === 'medium'){
            min_weight = 26;
            max_weight = 40;
          }
          if(characteristic === 'large'){
            min_weight = 41;
            max_weight = 300;
          }
          if(sizeSelect === undefined) {
            sizeSelect = breed.weight_avg > min_weight && breed.weight_avg <= max_weight;
          } else {
            sizeSelect = sizeSelect || (breed.weight_avg > min_weight && breed.weight_avg <= max_weight);
          }
        });
        return energySelect || hairSelect || playfulSelect || sizeSelect;
      }); //end of filter

      this.setState({
        breeds: filteredBreeds,
        unfiltered: allBreeds
      });
    }//end of if else
  } //end of searchNow()

 addDefaultSrc(ev){
    ev.target.src = 'https://www.drawingtutorials101.com/drawing-tutorials/Cartoon-Movies/Bolt/bolt/how-to-draw-Dog-from-Bolt-step-0.png'
  }

  render () {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/matchMe" render={() => (
          <div className="view2">
          <div className = 'below-header'></div>
          <div className='top-view2'>
              
              <Search search={this.search} className="search" searchNow={this.searchNow}/>
              <List breeds={this.state.breeds} addDefaultSrc={this.addDefaultSrc}/>
              </div>
              <div className="bottom">
      <div className="info">
        <div id="mission" className="text box">
            <h3>Mission</h3>
            <p>We aim to simplify the dog adoption process by targeting breeds that will pair favorably with your lifestyle, and locating local area dogs in need of a good home.</p>
        </div>
        <div className='bottom-logo box'>
          <img src='logo2.png' alt='logo'width="85" />
        </div>
        <div  id="aboutUs"className="text box">
          <h3>About Us</h3>
          <p>Doggy consists of four developers whose love for dogs has inspired us to build a solution for the number of aspiring pet owners that can't quite figure out how to get started.</p>
        </div>
      </div>

      <div className= 'copyright'>
        <p>©2018 Doggy App All rights reserved.</p>
      </div>
      </div>
          </div>
        )}/>
        <Route exact={true} path="/adopt/:breed/:zip" render={({match}) => (
          <AdoptList match={match}/>
        )}/>
      </Switch>
    )
  }
}


ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));
