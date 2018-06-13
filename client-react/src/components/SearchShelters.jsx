import React from 'react';
import axios from 'axios';

class SearchShelters extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  zipcode: '',
      shelters: []
    }
    this.searchShelters = this.searchShelters.bind(this);
  }

  componentDidMount() {

  }

  searchShelters(zipcode) {
    axios.post('/shelters', zipObj)
    .then()
    .catch();
  }

  render() {
  	return (
  	  <div className="search-shelters-page">
        <h1>Search Local Shelters</h1>
        <form>
          <input placeholder="enter zipcode"/>
        <button>Submit</button>
        </form>
  	  	
        <div className="search-shelters-results">
          {this.state.shelters.map((shelter) => (
            <div>{shelter.name.$t}</div>
          ))}
        </div>
  	  </div>
  	)
  }
}



export default SearchShelters;