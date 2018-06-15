import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: null
    };
    this.getFaves = this.getFaves.bind(this);
    this.deleteFave = this.deleteFave.bind(this);
    // console.log(this.props.username);
  }
  componentDidMount() {
    console.log('props of Profile component', this.props);
    // if(this.props.userIsAuthenticated) this.getFaves(this.props.username);
    this.getFaves('Rose'); //====================change after testing
    
  }
  getFaves(username) {
    localStorage.setItem('previousPage', null);
    console.log('getting faves for', username);
    axios.get('/faves', {params: {username}})
      .then(({data}) => this.setState({dogs: data}, () => console.log(this.state.dogs)))
      .catch(err => console.log(err));
  }
  deleteFave(dog_id, username) {
    console.log('deleting pupper', dog_id, username);
    axios.delete('/faves', {params: {dog_id, username}})
    .then(data => this.getFaves(username))
    .catch(err => console.log(err));
  }
  render() {
    let username = 'Rose'; //====================change after testing
    // let {username} = this.props;
    // if (!this.props.userIsAuthenticated) return <Redirect to="/login" />; // commented out for now while developing
    if (!this.state.dogs) return <div>FETCHING YOUR PUPPERS!</div>
    let dogProfiles = this.state.dogs.map(dog => {
      // console.log(JSON.parse(dog.media).photos.photo);
      let dogpic = JSON.parse(dog.media).photos.photo[2].$t;
      return (
        <div className="fave-dog-container" key={dog.dog_id}>
          <div className="fave-dog-info">
            <h1>{dog.name}</h1>
            <h1>{dog.age}</h1>
            {/* <h1>{dog.breeds}</h1> */}
          </div>
          <div className="fave-dog-pic">
            <img width="100px" src={dogpic} />
          </div>
        <button onClick={() => this.deleteFave(dog.dog_id, username)}>Delete</button>
        </div>
      )
    });

    return (
      <div id="profile-page">
        <div id="profile-to-home"><Link to={'/matchMe'}>
        <button>Browse Breeds</button>
        </Link></div>
        <div id="profile-container">
          <h1>Welcome back, <span>{username}</span></h1>
          <div id="faves-container">
            {dogProfiles}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;