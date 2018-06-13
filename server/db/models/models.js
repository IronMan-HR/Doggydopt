var db = require('../../db/index.js');
var axios = require('axios');
var pf_key = process.env.pf_key;

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
        let {} = dogObj; // pull values from dogObj
        params = [];
        var queryStr = "INSERT INTO favedogs () VALUES ()";
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
                // for(var i=0; i<10; i++){
                //     acc.push(()=>{
                //         //api + breeds[i].breed
                //         axios.get(breeds[i].breed);
                //     });

                // };
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
                    // console.log(acc);
                    // console.log(JSON.stringify(acc));
    
                    // for(var j=0; j<acc.length;j++){
                    //     (function(index){
                    //         acc[index](function (val) {
    
                    //         })
                    //     })
                    // }
                })
                .catch(()=>{

                });
            });
        }   
    }
};


// Dean says breeds.post works, but isn't used at all, so I moved it down here
// post: (params, callback) => {
//     var queryStr = "SELECT * FROM breeds WHERE ";
//     var conditionals = "";
//     var sizeToWeight = {
//         'small': 'BETWEEN 0 and 25',
//         'medium': 'BETWEEN 26 and 40',
//         'large':  '> 45'
//     };
//     //Adds SQL query for size to weight.
//     if(params.size.length === 1){
//         conditionals += "weight_avg " + sizeToWeight[params.size[0]] + " ";
//     } else if(params.size.length != 0){
//         conditionals += "weight_avg " + sizeToWeight[params.size[0]] + " ";
//         for(var i=1; i<params.size.length; i++){
//             conditionals += "OR weight_avg " + sizeToWeight[params.size[i]] + " ";
//         }
//     }
//     //Adds energy to exercise conditional
//     if(params.energy.length === 1){
//         conditionals += "AND exercise='" + params.energy[0] + "' ";
//     } else if(params.energy.length != 0){
//         conditionals += "AND exercise='" + params.energy[0] + "' ";
//         for(var i=1; i<params.energy.length; i++){
//             conditionals += "OR exercise='" + params.energy[i] + "' ";
//         }
//     }
//     //hair shedding conditional
//     if(params.hair.length === 1){
//         conditionals += "AND shedding='" + params.hair[0] + "' ";
//     } else if(params.hair.length != 0){
//         conditionals += "AND shedding='" + params.hair[0] + "' ";
//         for(var i=1; i<params.hair.length; i++){
//             conditionals += "OR shedding='" + params.hair[i] + "' ";
//         }
//     }
//     //kid to biddability
//     if(params.kid.length === 1 && params.kid === 'yes'){
//         conditionals += "AND biddability = 'moderate' AND biddability = 'high";
//     }
//     queryStr += conditionals;
//     db.query(queryStr, (err, data)=>{
//         callback(data);
//     });
// },