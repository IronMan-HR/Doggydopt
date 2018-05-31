import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import exampleData from '../../exampleData.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: exampleData,
      adoptables: []
    } 
    this.clickHandler = this.clickHandler.bind(this);
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

  clickHandler(breed) {
    axios.post('/adopt', {
      breedName: breed.breed,
      zipCode: 10017 // HARDCODED
    })
    .then(res => {
      this.state({
        adoptables: res.data
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

  render () {
    if (this.state.adoptables.length === 0) {
      return (
        <div className="columns is-gapless">
            <Search search={this.search}/>
            <List breeds={this.state.breeds} clickHandler={this.clickHandler}/>
        </div>
      )
    } else {
      return <AdoptList dogs={this.state.adoptables}/>;
    }
  }
}


ReactDOM.render(<App />, document.getElementById('app'));