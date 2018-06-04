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
    console.log("SEARCH NOW---------------------------")
     var allBreeds;
   // console.log('unfiltered length', this.state.unfiltered.length);
    if(this.state.unfiltered.length === 0){
     allBreeds = this.state.breeds.slice();
    } else {
     allBreeds = this.state.unfiltered.slice();
    }
 
    var translate = {
     energy: 'breed',
     hair: 'shedding',
     familyDog: 'biddability',
     playful: 'biddability'
   };
    //   {
 //     size: [/* 'small', 'medium', 'large' */],
 //     energy: [/* 'low', 'moderate', 'high' */],
 //     hair: [/* 'low', 'moderate', 'high' */], //shedding
 //     familyDog:  [/* 'yes' */], //biddability
 //     playful: [/* 'low', 'moderate', 'high' */]
 //   }
 //   var sizeToWeight = {
 //     'small': 'BETWEEN 0 and 25',
 //     'medium': 'BETWEEN 26 and 40',
 //     'large':  '> 45'
 // };
   var filteredBreeds = allBreeds.filter((breed)=>{
     console.log("breed------------->", breed.breed);
     console.log("breed stats: ", breed);
     console.log('params:', params);
    
    
     var energySelect = params.energy.some((characteristic)=>{
       return characteristic === breed.exercise;
     });
     console.log('energySelect', energySelect);
    
     var hairSelect = params.hair.some((characteristic)=>{
       return characteristic === breed.shedding;
     });
     console.log('hairSelect', hairSelect);
    
     var playfulSelect = params.playful.some((characteristic)=>{
       return characteristic === breed.biddability;
     });
     console.log('playfulSelect', hairSelect);
     
    
     var sizeSelect;
     console.log('foreach', params.size.length);
     params.size.forEach((characteristic)=>{
       var min_weight = 0;
       var max_weight = 0;
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
       console.log('min:', min_weight);
       console.log('max:', max_weight);
       console.log('weight:', breed.weight_avg);
       console.log('REDUCING', breed.weight_avg > min_weight && breed.weight_avg <= max_weight);
       if(sizeSelect === undefined) {
         console.log('sizeselect set first');
         sizeSelect = breed.weight_avg > min_weight && breed.weight_avg <= max_weight;
       } else {
         sizeSelect = sizeSelect || (breed.weight_avg > min_weight && breed.weight_avg <= max_weight);
       }
       
       //return acc && (breed.weight_avg >= min_weight && breed.weight_avg < max_weight);
     });
     console.log('sizeSelect end result', sizeSelect);
     
     return energySelect || hairSelect || playfulSelect || sizeSelect;
   });
    
   console.log('searchNow state', params);
   this.setState({
     breeds: filteredBreeds,
     unfiltered: allBreeds
   });
   }

 addDefaultSrc(ev){
    ev.target.src = 'https://www.drawingtutorials101.com/drawing-tutorials/Cartoon-Movies/Bolt/bolt/how-to-draw-Dog-from-Bolt-step-0.png'
  }

  render () {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/matchMe" render={() => (
          <div className="view2">
              <Search search={this.search} className="search" searchNow={this.searchNow}/>
              <List breeds={this.state.breeds} addDefaultSrc={this.addDefaultSrc}/>
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
