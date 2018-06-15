import React from 'react';
import axios from 'axios';

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

  // componentWillMount() {
  //   this.getGoogleMaps();
  // }

  componentDidMount() {
    this.searchShelters();

    // Once the Google Maps API has finished loading, initialize the map
    this.getGoogleMaps().then((google) => {
      const latlong = {lat: 40.750885, lng: -73.983511};
      const map = new google.maps.Map(document.getElementById('search-shelters-map'), {
        zoom: 16,
        center: latlong
      });
      const marker = new google.maps.Marker({
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
    // axios.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyD8EVIaRnrGkLM6HLFfsdvtaMG5Cv2p31I&callback=initMap");
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
      // console.log('shelter search results:', results);
      this.setState({
        shelters: results.data
      });
    })
    .catch((err) => console.log('searchShelters err: ', err));
  }

  getGoogleMaps() {
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        window.handleGoogleMapsAPIWhenLoaded = () => {
          resolve(google);
          delete window.handleGoogleMapsAPIWhenLoaded;
        };

        // Load the Google Maps API
        var script = document.createElement('script');
        var API = 'AIzaSyD8EVIaRnrGkLM6HLFfsdvtaMG5Cv2p31I';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=handleGoogleMapsAPIWhenLoaded`;
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