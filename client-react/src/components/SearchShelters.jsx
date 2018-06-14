import React from 'react';
import axios from 'axios';

class SearchShelters extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  zipcode: '10016',
      shelters: []
    }
    this.handleZipInput = this.handleZipInput.bind(this);
    this.searchShelters = this.searchShelters.bind(this);
  }

  // componentDidMount() {
  //   this.searchShelters();
  // }

  handleZipInput(e) {
    console.log('what am i typing for zip:', e.target.value);
    this.setState({
      zipcode: e.target.value.toString()
    });
    console.log('what is state for zipcode: ', this.state.zipcode);
  }

  searchShelters(e) {
    e.preventDefault();
    console.log('now searching for shelters in zip: ', this.state.zipcode)
    axios.post('/shelters', {zipcode: this.state.zipcode})
    .then((results) => {
      console.log('what i get back on shelter search:', results);
      this.setState({
        shelters: results.data
      });
    })
    .catch((err) => console.log('searchShelters err: ', err));
  }

  render() {
  	return (
  	  <div className="search-shelters-page">
        <h1>Search Local Shelters</h1>
        <form>
          <input placeholder="enter zipcode" onChange={this.handleZipInput} />
          <button onClick={this.searchShelters}>Submit</button>
        </form>
  	  	
        <div className="search-shelters-results">
          {this.state.shelters.map((shelter) => (
            <div className="shelter-item">
              <h3>{shelter.name.$t}</h3>
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