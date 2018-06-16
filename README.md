# [Doggydopt](https://calm-badlands-51138.herokuapp.com/)

<img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1149910-200.png" alt="Doggydopt" width="100px" height="100px">

Want a new furry friend but are overwhelmed by the selection process? Doggydopt uses your zipcode to be show dogs in your area! You can filter by dog characteristics like size, energy, or shedding to see breeds that may interest you, then further narrow down your search by age, gender, and other traits like whether a dog is house-trained or has shots!

Click once to be put in contact with the shelter, or if you're not sure, you can save the dog to your faves. Don't worry about losing your dogs between sessions, because they'll be safely nestled in your personal user account. The _**My Dogs**_ page will show you all the dogs you've saved. It's perfect for deciding between a few dogs, or even just checking in to see how dogs are doing.

Just want to see dogs in person? The _**Find a Shelter**_ feature lets you search by zip code to find nearby shelters to visit.

## Team

- __Product Owner__: Lina Lei
- __Scrum Master__: Scott McCreary
- __Development Team__: Rose Lin

## Table of Contents

- [Doggydopt](#doggydopthttps---calm-badlands-51138herokuappcom)
  - [Team](#team)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
    - [Running the Development App](#running-the-development-app)
    - [Roadmap](#roadmap)
    - [Contributing](#contributing)

## Development

### Running the Development App

From within the root directory:

```sh
npm install
npm run react-dev
npm start
```

Duplicate `config example.js` and insert your credentials. The server will run on your localhost.

### Roadmap

- **Database**: MySQL is used to persist user and dog data in the *Dogs* database. See `schema.sql` for the schemas used, and `server/db/models.js` for the model used for interfacing with the database
- **Server**: NodeJS and ExpressJS handle server-side routing and incoming client requests in `server/index.js`
- **Authentication**: bcrypt is used for encrypting user passwords, while express-sessions persists logins
- **Client-side**: The front end is rendered in React with redirects handled by react-router

### Contributing

See [CONTRIBUTING.md](https://github.com/unexpected-lion/ourglass/blob/master/contributing.md) for contribution guidelines.
