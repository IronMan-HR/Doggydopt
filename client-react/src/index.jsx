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
      selectedBreed: {}
    } 
    this.clickHandler = this.clickHandler.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    axios.get('/breeds/all')
    .then(res => {
      console.log(res.data);
      this.setState({
        breeds: res.data
      });
    }).catch(err => {
      console.error(err);
    })
  }

  clickHandler(breed) {
    this.setState({
      selectedBreed: breed
    })
  }

  search(params) {
    axios.post('/breeds', params)
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.error(err);
    })
  }

  render () {
    let breed = this.state.selectedBreed
    if (breed.constructor === Object && Object.keys(breed).length === 0) {
      return (
        <div className="columns is-gapless">
            <Search search={this.search}/>
            <List breeds={this.state.breeds} clickHandler={this.clickHandler}/>
        </div>
      )
    } else {
      return <AdoptList breed={breed}/>;
    }
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
>>>>>>> dev
