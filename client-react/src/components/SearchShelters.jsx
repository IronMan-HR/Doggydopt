import React from 'react';
import axios from 'axios';

class SearchShelters extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  zipcode: ''
  	}
  }

  render() {
  	return (
  	  <div>SEARCH HERE
  	  	<button>testing</button>
  	  </div>
  	)
  }
}



export default SearchShelters;