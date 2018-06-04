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
      homeView: true   
    } 
    this.search = this.search.bind(this);
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

  render () {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/matchMe" render={() => (
          <div className="columns is-gapless">
              <Search search={this.search}/>
              <List breeds={this.state.breeds} />
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
