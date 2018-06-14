import React from 'react';
import axios from 'axios';

class SearchShelters extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  zipcode: '10016',
      shelters: []
    }
    this.searchShelters = this.searchShelters.bind(this);
  }

  componentDidMount() {
    this.searchShelters();
  }

  searchShelters() {
    var zipObj = {zipcode: this.state.zipcode}
    axios.post('/shelters', zipObj)
    .then((results) => this.setState({shelters: results.data}))
    .catch((err) => console.log('searchShelters err: ', err));
  }

  render() {
  	return (
  	  <div className="search-shelters-page">
        <h1>Search Local Shelters</h1>
        <form>
          <input placeholder="enter zipcode"/>
          <button onClick={this.searchShelters}>Submit</button>
        </form>
  	  	
        <div className="search-shelters-results">
          {this.state.shelters.map((shelter) => (
            <div className="shelter-item">
              <p>{shelter.name.$t}</p>
              <p>{shelter.address1.$t}</p>
              <p>{shelter.address2.$t}</p>
              <p>{shelter.city.$t} {shelter.state.$t} {shelter.zip.$t}</p>
              <p>{shelter.phone.$t}</p>
              <p>{shelter.email.$t}</p>
            </div>
          ))}
        </div>
  	  </div>
  	)
  }
}



export default SearchShelters;