var db = require('../../db/index.js');
var axios = require('axios');
var pf_key = process.env.pf_key;
var bcrypt = require('bcrypt-nodejs');

//Checks to see if in deployment or locally hosted, provides the config.js if local.
if(pf_key === undefined){
    pf_key = require('../../../config.js');
    pf_key = pf_key.pf_key;
}

db.connect();

module.exports = {
    //Makes a call to petfinder with the breed name and zip code. The api returns a list of locally adoptable dogs with their names, summary, and information.
    adopt: {
        post: (params, callback)=>{
            var apiQuery = `http://api.petfinder.com/pet.find?key=${pf_key}&animal=dog&location=${params.zipCode}&count=75&output=full&format=json&count=10&breed=${params.breedName}`;
            axios.get(apiQuery)
            .then((results)=>{
                // console.log(results.data.petfinder.pets);
                callback(results.data.petfinder.pets);
            })
            .catch((err)=>{
                callback(err);
            });
        }
    }, 
    breeds: {
        all: callback => {
            var queryStr = "SELECT * FROM breeds";
            db.query(queryStr, (err, data) => {
                callback(data);
            });
        }
    },
    faves: {  // Rose working on this faves feature
      getDogs: callback => {
        var queryStr = "SELECT * FROM FaveDogs";
        db.query(queryStr, (err, data) => {
          if (err) callback(err);
          else callback(null, data);
        });
      },
      getDogsByBreed: (breed, callback) => {
        var queryStr = `SELECT * FROM FaveDogs WHERE breeds LIKE '%${breed}%'`;
        db.query(queryStr, (err, data) => {
          if (err) callback(err);
          else callback(null, data);
        });
      },
      getDogIDs: callback => {
        // for list of ids to crosscheck against loaded dogs for filtering
        var queryStr = "SELECT dog_id FROM FaveDogs";
        db.query(queryStr, (err, data) => {
          if (err) callback(err);
          else callback(null, data);
        });
      },
      saveDog: (dogObj, callback) => {
        // takes dog object, adds to database, runs callback
        let {age, breeds, contact, description, id, media, mix, name, options, sex, shelterId, shelterPetId, size, status} = dogObj; // pull values from dogObj
        let values = [age.$t, JSON.stringify(breeds.breed), contact.address1.$t, contact.address2.$t, contact.city.$t, contact.email.$t, contact.fax.$t, contact.phone.$t, contact.state.$t, contact.zip.$t, description.$t, id.$t, JSON.stringify(media), mix.$t, name.$t, JSON.stringify(options.option), sex.$t, shelterId.$t, shelterPetId.$t, size.$t, status.$t];
        // console.log(values);
        let columns = 'age, breeds, address1, address2, city, email, fax, phone, state, zip, description, dog_id, media, mix, name, options, sex, shelterId, shelterPetId, size, status';
        var queryStr = `INSERT INTO favedogs (${columns}) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        // console.log(queryStr);
        db.query(queryStr, values, (err, data) => {
          if (err) callback(err);
          else callback(null, data);
        });
      }
    },
  
    pictures: {
        //Currently in development, gets the pictures for the breeds.
        get: ()=>{
            var apiQuery = `http://loremflickr.com/640/480/dog,Brittany Spaniel'`;
            axios.get(apiQuery)
            .then((results)=>{
                console.log('lorem results', results);
            })
        },
        ceo: ()=>{
            var apiQuery = "https://dog.ceo/api/breed/hound/images";
            var apiRandom = "https://dog.ceo/api/breed/african/images/random"
            // `https://dog.ceo/api/breed/${}/images/random`

            var resultsArray = [];
            var resultsCount = 0;
            var acc = [];
            var queryStr = "SELECT breed from breeds";
            db.query(queryStr, (err, breeds)=>{

                axios.get('https://dog.ceo/api/breeds/list/all')
                .then((breedsVerify)=>{
                    var verify = {"affenpinscher":[],"african":[],"airedale":[],"akita":[],"appenzeller":[],"basenji":[],"beagle":[],"bluetick":[],"borzoi":[],"bouvier":[],"boxer":[],"brabancon":[],"briard":[],"bulldog":["boston","french"],"bullterrier":["staffordshire"],"cairn":[],"chihuahua":[],"chow":[],"clumber":[],"collie":["border"],"coonhound":[],"corgi":["cardigan"],"dachshund":[],"dalmatian":[],"dane":["great"],"deerhound":["scottish"],"dhole":[],"dingo":[],"doberman":[],"elkhound":["norwegian"],"entlebucher":[],"eskimo":[],"germanshepherd":[],"greyhound":["italian"],"groenendael":[],"hound":["afghan","basset","blood","english","ibizan","walker"],"husky":[],"keeshond":[],"kelpie":[],"komondor":[],"kuvasz":[],"labrador":[],"leonberg":[],"lhasa":[],"malamute":[],"malinois":[],"maltese":[],"mastiff":["bull","tibetan"],"mexicanhairless":[],"mix":[],"mountain":["bernese","swiss"],"newfoundland":[],"otterhound":[],"papillon":[],"pekinese":[],"pembroke":[],"pinscher":["miniature"],"pointer":["german"],"pomeranian":[],"poodle":["miniature","standard","toy"],"pug":[],"pyrenees":[],"redbone":[],"retriever":["chesapeake","curly","flatcoated","golden"],"ridgeback":["rhodesian"],"rottweiler":[],"saluki":[],"samoyed":[],"schipperke":[],"schnauzer":["giant","miniature"],"setter":["english","gordon","irish"],"sheepdog":["english","shetland"],"shiba":[],"shihtzu":[],"spaniel":["blenheim","brittany","cocker","irish","japanese","sussex","welsh"],"springer":["english"],"stbernard":[],"terrier":["american","australian","bedlington","border","dandie","fox","irish","kerryblue","lakeland","norfolk","norwich","patterdale","scottish","sealyham","silky","tibetan","toy","westhighland","wheaten","yorkshire"],"vizsla":[],"weimaraner":[],"whippet":[],"wolfhound":["irish"]}
                    // console.log('breeds verify', breedsVerify.data.message);
                    breeds = JSON.stringify(breeds);
                    breeds = JSON.parse(breeds);
            
                    acc = breeds.filter((breed)=>{
                        //console.log("in filter2 lowercase");
                        //console.log(breed.breed.toLowerCase() in verify);
                        return breed.breed.toLowerCase() in verify;
                    });
                    //console.log('acc here are the listed', acc);
                    console.log('mapping');
                    //console.log('list of common', acc);
                    acc = acc.map((breed)=>{
                        //console.log('inside map', breed);
                        console.log(`https://dog.ceo/api/breed/${breed.breed.toLowerCase()}/images/random`);
                        return ()=>{return axios.get(`https://dog.ceo/api/breed/${breed.breed.toLowerCase()}/images/random`)};
                        //return breed.breed.toLowerCase();
                    });
                    console.log(JSON.stringify(acc));
                    axios.all(acc)
                    .then(axios.spread(function(acct, perms){
                        console.log('all done');
                        console.log(acct);
                        console.log(perms);
                    }))
                    .catch((err)=>{
                        console.log('err');
                        console.log(err);
                    });
                })
                .catch(()=>{

                });
            });
        }   
    },

    users: {
        checkUser: (username, password, callback) => {
            var userQuery = `SELECT * FROM Users WHERE username = '${username}'`;
            db.query(userQuery, (err, foundUser) => {
                console.log('foundUser is', foundUser);
                if (err) {
                    callback(202, 'user does not exist');
                } else {
                    bcrypt.compare(password, foundUser[0].password, (err, res) => {
                        if (err) {
                            callback(202, 'incorrect password');
                        } else {
                            callback(201);
                        }
                    });
                }
            });
        },
        createUser: (username, password, callback) => {
            var userQuery = `SELECT * FROM Users WHERE username = '${username}'`;
            db.query(userQuery, (err, foundUser) => {
                console.log('err is', err);
                console.log('foundUser is', foundUser);
                if (err) {
                    callback(202, 'user already exists');      
                } else {
                    bcrypt.hash(password, null, null, (err, hash) => {
                        if (err) {
                            callback(202, 'error hashing password');
                        } else {
                            console.log('hash is', hash);
                            console.log('username is', username);
                            var createQuery = `INSERT into Users (username, password) VALUES ('${username}', '${hash}')`;
                            db.query(createQuery, err => {
                                if (err) {
                                    callback(202, 'error inserting into database');
                                } else {
                                    callback(201);
                                }
                            })      
                        }
                    });
                }
            });
        },
    }
};

//testing down here
// let oneDog = {"options":{"option":[{"$t":"altered"},{"$t":"hasShots"},{"$t":"housetrained"},{"$t":"noKids"}]},"status":{"$t":"A"},"contact":{"phone":{},"state":{"$t":"NY"},"address2":{},"email":{"$t":"pupstarzrescue@gmail.com"},"city":{"$t":"New York"},"zip":{"$t":"10010"},"fax":{},"address1":{}},"age":{"$t":"Adult"},"size":{"$t":"L"},"media":{"photos":{"photo":[{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/36223058/1/?bust=1473822488&width=60&-pnt.jpg","@id":"1"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/36223058/1/?bust=1473822488&width=95&-fpm.jpg","@id":"1"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/36223058/1/?bust=1473822488&width=500&-x.jpg","@id":"1"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/36223058/1/?bust=1473822488&width=300&-pn.jpg","@id":"1"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/36223058/1/?bust=1473822488&width=50&-t.jpg","@id":"1"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/36223058/2/?bust=1473822489&width=60&-pnt.jpg","@id":"2"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/36223058/2/?bust=1473822489&width=95&-fpm.jpg","@id":"2"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/36223058/2/?bust=1473822489&width=500&-x.jpg","@id":"2"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/36223058/2/?bust=1473822489&width=300&-pn.jpg","@id":"2"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/36223058/2/?bust=1473822489&width=50&-t.jpg","@id":"2"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/36223058/3/?bust=1495825630&width=60&-pnt.jpg","@id":"3"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/36223058/3/?bust=1495825630&width=95&-fpm.jpg","@id":"3"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/36223058/3/?bust=1495825630&width=500&-x.jpg","@id":"3"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/36223058/3/?bust=1495825630&width=300&-pn.jpg","@id":"3"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/36223058/3/?bust=1495825630&width=50&-t.jpg","@id":"3"}]}},"id":{"$t":"36223058"},"shelterPetId":{},"breeds":{"breed":{"$t":"Rottweiler"}},"name":{"$t":"Roxie! **FOSTER NEEDED**"},"sex":{"$t":"F"},"description":{"$t":"Roxie is a 5 year old, 80 pound Rottweiler mix. She is very affectionate and loves people. Roxie does not do well with cats and prefers to be the only pet in the household.  \n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nRoxie's Adoption Donation is: $400\n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram and twitter: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"},"mix":{"$t":"no"},"shelterId":{"$t":"NY1270"},"lastUpdate":{"$t":"2016-09-14T03:08:08Z"},"animal":{"$t":"Dog"}};
// module.exports.faves.saveDog(oneDog, (err, data) => console.log(err, data));
// module.exports.faves.getDogs((err, data) => console.log(err, data));
// module.exports.faves.getDogsByBreed('Rottweiler', (err, data) => console.log(err, data));
// module.exports.faves.getDogIDs((err, data) => console.log(err, data));