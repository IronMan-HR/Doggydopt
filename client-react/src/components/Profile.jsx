import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: null,
      // redirect: false,
      username: 'Lina',
    };
    this.getFaves = this.getFaves.bind(this);
    this.deleteFave = this.deleteFave.bind(this);
    // console.log(this.props.username);
  }
  componentDidMount() {
    if(this.props.userIsAuthenticated) this.getFaves('Lina');  //== TODO: remove hard-coded references or state-references to username
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
    if (!this.props.userIsAuthenticated) return <Redirect to="/login" />;
    if (!this.state.dogs) return <div>FETCHING YOUR PUPPERS!</div>
    let dogProfiles = this.state.dogs.map(dog => (
      <div className="faves-dogs-container" key={dog.dog_id}>
      <h1>{dog.name}</h1>
      <button onClick={() => this.deleteFave(dog.dog_id, this.state.username)}>Delete</button>
      </div>
    ));

    let username = 'Lina'; // let {username} = this.props;
    return (
      <div id="profile-container">
        <h1>Welcome back, <span>{username}</span></h1>
        {dogProfiles}
      </div>
    );
  }
}

export default Profile;