import React from 'react';
import axios from 'axios';
import {googleMapsAPI_key} from '../../../config.js';

class SearchShelters extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  zipcode: '10017',
      shelters: [ { country: { '$t': 'US' },
      longitude: { '$t': '-73.9751' },
      name: { '$t': 'Rescuzilla' },
      phone: {},
      state: { '$t': 'NY' },
      address2: {},
      email: { '$t': 'adopt@rescuzillanyc.org' },
      city: { '$t': 'New York' },
      zip: { '$t': '10017' },
      fax: {},
      latitude: { '$t': '40.7526' },
      id: { '$t': 'NY993' },
      address1: {} },
    { country: { '$t': 'US' },
      longitude: { '$t': '-73.9751' },
      name: { '$t': 'Rebound Hounds' },
      phone: {},
      state: { '$t': 'NY' },
      address2: {},
      email: { '$t': 'reboundhounds@gmail.com' },
      city: { '$t': 'New York' },
      zip: { '$t': '10017' },
      fax: {},
      latitude: { '$t': '40.7526' },
      id: { '$t': 'NY1041' },
      address1: {} } ]
    }
    this.handleZipInput = this.handleZipInput.bind(this);
    this.searchShelters = this.searchShelters.bind(this);
    this.getGoogleMaps = this.getGoogleMaps.bind(this);
    this.renderGoogleMaps = this.renderGoogleMaps.bind(this);
  }

  componentDidMount() {
    //when page loads, display default shelters and default google map for zipcode 10017 
    this.searchShelters();
    this.getGoogleMaps().then((google) => this.renderGoogleMaps(google));

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
      console.log('search results for zipcode: ', results)
      this.setState({
        shelters: results.data
      });
      this.getGoogleMaps().then((google) => this.renderGoogleMaps(google));
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

  renderGoogleMaps(google) {
    var latlong = {lat: +this.state.shelters[0].latitude.$t, lng: +this.state.shelters[0].longitude.$t}; 
    var map = new google.maps.Map(document.getElementById('search-shelters-map'), {
      zoom: 14,
      center: latlong
    });
    
    for(var i = 0; i < this.state.shelters.length; i++) {
      var currShelter = this.state.shelters[i];
      var marker = new google.maps.Marker({
        position: {lat: +currShelter.latitude.$t, lng: +currShelter.longitude.$t},
        map: map
      });
    }
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