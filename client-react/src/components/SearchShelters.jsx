import React from 'react';
import axios from 'axios';
import {googleMapsAPI_key} from '../../../config.js';

class SearchShelters extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  zipcode: '10017',
      shelters: []
    }
    this.handleZipInput = this.handleZipInput.bind(this);
    this.searchShelters = this.searchShelters.bind(this);
    this.getGoogleMaps = this.getGoogleMaps.bind(this);
  }

  componentDidMount() {
    //when page loads, display default shelters and default google map for zipcode 10017 
    this.searchShelters();
    this.getGoogleMaps().then((google) => {
      var latlong = {lat: 40.750885, lng: -73.983511}; //placeholder lat/long to use for now
      var map = new google.maps.Map(document.getElementById('search-shelters-map'), {
        zoom: 16,
        center: latlong
      });
      var marker = new google.maps.Marker({
        position: latlong,
        map: map
      });
    });

    // function initMap() {
    //   var latlong = {lat: 40.750885, long: -73.983511};
    //   var map = new google.maps.Map(document.getElementById("search-shelters-map"), {
    //     zoom: 4,
    //     center: latlong
    //   });
    //   var marker = new google.maps.Marker({
    //     position: latlong,
    //     map: map
    //   });
    //   console.log('latlong: ', latlong);
    // }
  }

  handleZipInput(e) {
    this.setState({
      zipcode: e.target.value.toString()
    });
  }

  searchShelters(e) {
    if(e) e.preventDefault();
    console.log('now searching for shelters in zip: ', this.state.zipcode)
    axios.post('/shelters', {zipcode: this.state.zipcode})
    .then((results) => {
      this.setState({
        shelters: results.data
      });
    })
    .catch((err) => console.log('searchShelters err: ', err));
  }

  getGoogleMaps() {
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve, reject) => { 
        window.handleGoogleMapsAPIWhenLoaded = () => {
          resolve(google);
          delete window.handleGoogleMapsAPIWhenLoaded;
        };

        //create script to call Google Maps API with callback
        var script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPI_key}&callback=handleGoogleMapsAPIWhenLoaded`;
        script.async = true;
        document.body.appendChild(script);
      });
    }
    return this.googleMapsPromise;
  }

  render() {
  	return (
  	  <div className="search-shelters-page">
        <h1>Search Local Shelters</h1>
        <form>
          <input placeholder="enter zipcode" onChange={this.handleZipInput} />
          <button onClick={this.searchShelters}>Submit</button>
        </form>
  	  	
        <div className="search-section">
          <div className="search-shelters-results">
            {this.state.shelters.map((shelter, index) => (
              <div className="shelter-item" key={index}>
                <h3>{shelter.name.$t}</h3>
                <p>{shelter.address1.$t}</p>
                <p>{shelter.address2.$t}</p>
                <p>{shelter.city.$t} {shelter.state.$t} {shelter.zip.$t}</p>
                <p>{shelter.phone.$t}</p>
                <p>{shelter.email.$t}</p>
              </div>
            ))}
          </div>

          <div id="search-shelters-map"></div>
        </div>
  	  </div>
  	)
  }
}

export default SearchShelters;