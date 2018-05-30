import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import exampleData from '../../exampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: exampleData
      } 
    }


  render () {
    return (
      <div>
        <Search />
        <List breeds={this.state.breeds}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));