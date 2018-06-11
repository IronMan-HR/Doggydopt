import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import exampleData from '../../exampleData.js';
import axios from 'axios';
import Home from './components/Home.jsx';
import AdoptList from './components/AdoptList.jsx';
import { BrowserRouter, Route, Link, Switch, browserHistory } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: exampleData,
      unfiltered: []   
    } 
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

  searchNow(params) {

    //The searchnow filters the breeds dynamicly as the user makes their selection for characteristics. As each selection is made, searchNow is invoked. 
    var allBreeds;

    //Checks to see if this is the first the filter is being used, if yes than a copy of all the breeds is kept in the state as unfiltered so additional api calls are unnecssary.
    if(this.state.unfiltered.length === 0){
      allBreeds = this.state.breeds.slice();
    } else {
      allBreeds = this.state.unfiltered.slice();
    };

    //If all the selections are 'unselected' or zero, than all the breeds are shown.
    if(params.size.length + params.energy.length + params.hair.length + params.playful.length === 0){
      this.setState({
        breeds: allBreeds,
        unfiltered: allBreeds
      });
    } else {

      //Based on the selection, certain breeds are shown and others are not.
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
          };
          if(characteristic === 'medium'){
            min_weight = 26;
            max_weight = 40;
          };
          if(characteristic === 'large'){
            min_weight = 41;
            max_weight = 300;
          };
          if(sizeSelect === undefined) {
            sizeSelect = breed.weight_avg > min_weight && breed.weight_avg <= max_weight;
          } else {
            sizeSelect = sizeSelect || (breed.weight_avg > min_weight && breed.weight_avg <= max_weight);
          };
        });
        return energySelect || hairSelect || playfulSelect || sizeSelect;
      }); //end of filter

      this.setState({
        breeds: filteredBreeds,
        unfiltered: allBreeds
      });
    }; //end of if else
  } //end of searchNow()

 // SETS DEFAULT PIC IF DOG HAS NO SUITABLE PICTURE
 addDefaultSrc(ev){
    ev.target.src = 'https://www.drawingtutorials101.com/drawing-tutorials/Cartoon-Movies/Bolt/bolt/how-to-draw-Dog-from-Bolt-step-0.png'
  }

  render () {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/matchMe" render={() => (
          <div className="view2">
            <div className = 'below-header2'></div>
            <div className = 'below-header'></div>
            <div className='top-view2'>  
              <Search search={this.search} className="search" searchNow={this.searchNow}/>
              <List breeds={this.state.breeds} addDefaultSrc={this.addDefaultSrc}/>
            </div>
          </div>
        )}/> 
        <Route exact={true} path="/adopt/:breed/:zip" render={({match}) => (
          <div className = 'view3'>
            <div className = 'below-header2'></div>
            <div className = 'below-header'></div>
            <AdoptList className='top-view3' match={match}/>
          </div>
        )}/>
      </Switch>
    )
  }
}


ReactDOM.render((
  <BrowserRouter history={browserHistory}>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));
