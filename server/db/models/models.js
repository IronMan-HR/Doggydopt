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
    shelters: {
      post: (params, callback) => {
        var queryStr = `http://api.petfinder.com/shelter.find?key=${pf_key}&location=${params.zipcode}&count=5&format=json`;
        axios.get(queryStr)
        .then((results) => {
            //API returns a collection of shelter records starting with the given ZIP/postal code
            //filter results to get ONLY results from the specific zipcode searched
            var apiresults = results.data.petfinder.shelters.shelter;
            var sheltersInSpecificZip = apiresults.filter(function(result) {
              return result.zip.$t === params.zipcode.toString();
            });
            console.log('apiresults: ', apiresults);
            console.log('sheltersInSpecificZip: ', sheltersInSpecificZip);
            callback(null, sheltersInSpecificZip);
        })
        .catch((err) => console.log('err on shelters search', err));
      }
    },
    faves: {
      getUserDogs: (username, callback) => {
        let queryStr = `SELECT * FROM FaveDogs INNER JOIN Users_FaveDogs ON FaveDogs.dog_id = Users_FaveDogs.dog_id WHERE user_id = (SELECT id FROM Users WHERE username = "${username}")`;
        db.query(queryStr, (err, data) => {
            if (err) callback(err);
            else callback(null, data);
          });
      },
      getAllDogs: callback => {
        let queryStr = "SELECT * FROM FaveDogs";
        db.query(queryStr, (err, data) => {
          if (err) callback(err);
          else callback(null, data);
        });
      },
      getAllDogsByBreed: (breed, callback) => {   
        let queryStr = `SELECT * FROM FaveDogs WHERE breeds LIKE '%${breed}%'`;
        db.query(queryStr, (err, data) => {
          if (err) callback(err);
          else callback(null, data);
        });
      },
      getAllDogsIDs: callback => {         // for list of ids to crosscheck against loaded dogs for filtering
        let queryStr = "SELECT dog_id FROM FaveDogs";
        db.query(queryStr, (err, data) => {
          if (err) callback(err);
          else callback(null, data);
        });
      },
      saveDogToPool: (dogObj, callback) => {
        let {age, breeds, contact, description, id, media, mix, name, options, sex, shelterId, shelterPetId, size, status} = dogObj; // pull values from dogObj
        let values = [age.$t, JSON.stringify(breeds.breed), contact.address1.$t, contact.address2.$t, contact.city.$t, contact.email.$t, contact.fax.$t, contact.phone.$t, contact.state.$t, contact.zip.$t, description.$t, id.$t, JSON.stringify(media), mix.$t, name.$t, JSON.stringify(options.option), sex.$t, shelterId.$t, shelterPetId.$t, size.$t, status.$t];
        let columns = 'age, breeds, address1, address2, city, email, fax, phone, state, zip, description, dog_id, media, mix, name, options, sex, shelterId, shelterPetId, size, status';
        let queryStr = `INSERT INTO favedogs (${columns}) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(queryStr, values, (err, data) => {
          if (err) callback(err);
          else callback(null, data);
        });
      },
      saveFave: (dog_id, username, callback) => {
        let queryStr = `REPLACE INTO Users_FaveDogs (dog_id, user_id) VALUES (${dog_id}, (SELECT id FROM Users WHERE username = "${username}"))`;
        db.query(queryStr, (err, data) => {
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
        checkUser: (userObj, callback) => {
            let {username, password} = userObj;
            var userQuery = `SELECT * FROM Users WHERE username = ?`;
            db.query(userQuery, username, (err, foundUser) => {
                if (err) {
                    callback(202, 'user does not exist');
                } else {
                    bcrypt.compare(password, foundUser[0].password, (err, res) => {
                        if (err) {
                            callback(202, 'error comparing passwords');
                        } else if (res === false) {
                            callback(202, 'inccorect password');
                        } else {
                            callback(201);
                        }
                    });
                }
            });
        },
        createUser: (userObj, callback) => {
            let {username, password, zip} = userObj;
            var userQuery = `SELECT * FROM Users WHERE username = ?`;
            db.query(userQuery, username, (err, results) => {
                if (err) {
                    callback(202, 'error retrieving user');      
                } else if (results.length > 0) {
                    callback(202, 'user already exists');
                } else {
                    bcrypt.hash(password, null, null, (err, hash) => {
                        if (err) {
                            callback(202, 'error hashing password');
                        } else {
                            var createQuery = `INSERT into Users (username, password, zip) VALUES (?, ?, ?)`;
                            db.query(createQuery, [username, hash, zip], err => {
                                if (err) {
                                    callback(202, 'error inserting into database');
                                } else {
                                    callback(201);
                                }
                            });
                        }
                    });
                }
            });
        },
    }
};

//testing down here
let dog1 = {"options":{"option":{"$t":"hasShots"}},"status":{"$t":"A"},"contact":{"phone":{},"state":{"$t":"NY"},"address2":{},"email":{"$t":"AdoptVictory4theVoiceless@gmail.com"},"city":{"$t":"Staten Island"},"zip":{"$t":"10301"},"fax":{},"address1":{"$t":"PO box 61544"}},"age":{"$t":"Baby"},"size":{"$t":"M"},"media":{"photos":{"photo":[{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/41734301/1/?bust=1527371924&width=60&-pnt.jpg","@id":"1"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/41734301/1/?bust=1527371924&width=95&-fpm.jpg","@id":"1"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/41734301/1/?bust=1527371924&width=500&-x.jpg","@id":"1"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/41734301/1/?bust=1527371924&width=300&-pn.jpg","@id":"1"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/41734301/1/?bust=1527371924&width=50&-t.jpg","@id":"1"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/41734301/2/?bust=1527371966&width=60&-pnt.jpg","@id":"2"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/41734301/2/?bust=1527371966&width=95&-fpm.jpg","@id":"2"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/41734301/2/?bust=1527371966&width=500&-x.jpg","@id":"2"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/41734301/2/?bust=1527371966&width=300&-pn.jpg","@id":"2"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/41734301/2/?bust=1527371966&width=50&-t.jpg","@id":"2"}]}},"id":{"$t":"41734301"},"shelterPetId":{},"breeds":{"breed":[{"$t":"Shepherd"},{"$t":"Akita"}]},"name":{"$t":"Warbucks"},"sex":{"$t":"M"},"description":{"$t":"Warbucks is an adventurous, high energy little guy! He was brought up from Mississipi with his mom and siblings. He's great with everyone!"},"mix":{"$t":"yes"},"shelterId":{"$t":"NY1216"},"lastUpdate":{"$t":"2018-05-26T22:01:51Z"},"animal":{"$t":"Dog"}}
let dog2 = {"options":{"option":{"$t":"altered"}},"status":{"$t":"A"},"contact":{"phone":{},"state":{"$t":"NY"},"address2":{},"email":{"$t":"scradoptables@gmail.com"},"city":{"$t":"Flushing"},"zip":{"$t":"11354"},"fax":{},"address1":{}},"age":{"$t":"Adult"},"size":{"$t":"M"},"media":{"photos":{"photo":[{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/41359795/1/?bust=1528879648&width=60&-pnt.jpg","@id":"1"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/41359795/1/?bust=1528879648&width=95&-fpm.jpg","@id":"1"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/41359795/1/?bust=1528879648&width=500&-x.jpg","@id":"1"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/41359795/1/?bust=1528879648&width=300&-pn.jpg","@id":"1"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/41359795/1/?bust=1528879648&width=50&-t.jpg","@id":"1"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/41359795/2/?bust=1528879724&width=60&-pnt.jpg","@id":"2"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/41359795/2/?bust=1528879724&width=95&-fpm.jpg","@id":"2"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/41359795/2/?bust=1528879724&width=500&-x.jpg","@id":"2"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/41359795/2/?bust=1528879724&width=300&-pn.jpg","@id":"2"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/41359795/2/?bust=1528879724&width=50&-t.jpg","@id":"2"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/41359795/3/?bust=1528879949&width=60&-pnt.jpg","@id":"3"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/41359795/3/?bust=1528879949&width=95&-fpm.jpg","@id":"3"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/41359795/3/?bust=1528879949&width=500&-x.jpg","@id":"3"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/41359795/3/?bust=1528879949&width=300&-pn.jpg","@id":"3"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/41359795/3/?bust=1528879949&width=50&-t.jpg","@id":"3"}]}},"id":{"$t":"41359795"},"shelterPetId":{"$t":"ps_97363512"},"breeds":{"breed":[{"$t":"Akita"},{"$t":"Husky"}]},"name":{"$t":"Trippet"},"sex":{"$t":"M"},"description":{"$t":"18 March 2018: Trippet is an Akita - Husky mix, originally from Texas. He is estimated to be around 2-3 years old. He is altered and up to date. He gets along with dogs his size or larger and is also fine with cats."},"mix":{"$t":"yes"},"shelterId":{"$t":"NY949"},"lastUpdate":{"$t":"2018-04-09T04:09:17Z"},"animal":{"$t":"Dog"}};
let dog3 = {"options":{"option":[{"$t":"altered"},{"$t":"hasShots"},{"$t":"housetrained"}]},"status":{"$t":"A"},"contact":{"phone":{"$t":"718-595-2161"},"state":{"$t":"NY"},"address2":{},"email":{"$t":"fofdogrescue@yahoo.com"},"city":{"$t":"Bayside"},"zip":{"$t":"11364"},"fax":{},"address1":{"$t":"P.O. Box 203"}},"age":{"$t":"Adult"},"size":{"$t":"L"},"media":{"photos":{"photo":[{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/41870778/1/?bust=1528746724&width=60&-pnt.jpg","@id":"1"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/41870778/1/?bust=1528746724&width=95&-fpm.jpg","@id":"1"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/41870778/1/?bust=1528746724&width=500&-x.jpg","@id":"1"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/41870778/1/?bust=1528746724&width=300&-pn.jpg","@id":"1"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/41870778/1/?bust=1528746724&width=50&-t.jpg","@id":"1"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/41870778/2/?bust=1528908906&width=60&-pnt.jpg","@id":"2"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/41870778/2/?bust=1528908906&width=95&-fpm.jpg","@id":"2"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/41870778/2/?bust=1528908906&width=500&-x.jpg","@id":"2"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/41870778/2/?bust=1528908906&width=300&-pn.jpg","@id":"2"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/41870778/2/?bust=1528908906&width=50&-t.jpg","@id":"2"}]}},"id":{"$t":"41870778"},"shelterPetId":{},"breeds":{"breed":[{"$t":"Husky"},{"$t":"Akita"}]},"name":{"$t":"Maggie"},"sex":{"$t":"F"},"description":{"$t":"Maggie is our big beautiful girl!  She was found as a stray, but her owner did not surface.  So she is now up for adoption.  \n\nWe believe Maggie is a Husky/Akita Mix.  She is 6-7 years old and she weighs 87 lbs.  She is totally housebroken and well-mannered.  She walks well on a leash and is gentle in all her ways.  She is easy dog to care for and to love.  \n\nMaggie can live with other dogs, pending a meet, and kids 8+.  Please contact us to meet Maggie!\n\nPhone: 917-864-2443\nEmail: fofdogrescue@yahoo.com  \n\n\n"},"mix":{"$t":"yes"},"shelterId":{"$t":"NY102"},"lastUpdate":{"$t":"2018-06-11T19:56:45Z"},"animal":{"$t":"Dog"}};

// module.exports.faves.saveDogToPool(dog1, (err, data) => console.log(err, data));
// module.exports.faves.saveDogToPool(dog2, (err, data) => console.log(err, data));
// module.exports.faves.saveDogToPool(dog3, (err, data) => console.log(err, data));

// module.exports.faves.getAllDogs((err, data) => console.log(err, data));
// module.exports.faves.getAllDogsByBreed('Akita', (err, data) => console.log(err, data));
// module.exports.faves.getAllDogsIDs((err, data) => console.log(err, data));

// module.exports.users.addUser({username: 'Rose', password: 'password', zip: '11220'}, (err, data) => console.log(err, data));
// module.exports.users.addUser({username: 'Lina', password: 'pokemon', zip: '10017'}, (err, data) => console.log(err, data));
// module.exports.users.addUser({username: 'Scott', password: 'lol', zip: '10017'}, (err, data) => console.log(err, data));

// module.exports.faves.saveFave('41359795', 'Rose', (err, data) => console.log(err, data));
// module.exports.faves.saveFave('41359795', 'Lina', (err, data) => console.log(err, data));
// module.exports.faves.saveFave('41870778', 'Lina', (err, data) => console.log(err, data));
// module.exports.faves.saveFave('41870778', 'Scott', (err, data) => console.log(err, data));

// module.exports.faves.getUserDogs('Rose', (err, data) => console.log(err, data));
// module.exports.faves.getUserDogs('Lina', (err, data) => console.log(err, data));
// module.exports.faves.getUserDogs('Scott', (err, data) => console.log(err, data));
