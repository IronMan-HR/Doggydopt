var db = require('../../db/index.js');
var axios = require('axios');
var credentials = process.env.credentials;
//var credentials = process.env.credentials || require('../../../config.js');
db.connect();

module.exports = {
    breeds: {
        post: (params, callback) => {
            var queryStr = "SELECT * FROM breeds WHERE ";
            var conditionals = "";

            var sizeToWeight = {
                'small': 'BETWEEN 0 and 25',
                'medium': 'BETWEEN 26 and 40',
                'large':  '> 45'
            };
            
            // //size to weight conditional
            // if(params.size.length === 1){
            //     conditionals += "weight_m_low " + sizeToWeight[params.size[0]] + " ";
            // } else if(params.size.length != 0){
            //     conditionals += "weight_m_low " + sizeToWeight[params.size[0]] + " ";
            //     for(var i=1; i<params.size.length; i++){
            //         conditionals += "OR weight_m_low " + sizeToWeight[params.size[i]] + " ";
            //     }
            // }
            //size to weight conditional
            if(params.size.length === 1){
                conditionals += "weight_avg " + sizeToWeight[params.size[0]] + " ";
            } else if(params.size.length != 0){
                conditionals += "weight_avg " + sizeToWeight[params.size[0]] + " ";
                for(var i=1; i<params.size.length; i++){
                    conditionals += "OR weight_avg " + sizeToWeight[params.size[i]] + " ";
                }
            }
            //energy to exercise conditional
            if(params.energy.length === 1){
                conditionals += "AND exercise='" + params.energy[0] + "' ";
            } else if(params.energy.length != 0){
                conditionals += "AND exercise='" + params.energy[0] + "' ";
                for(var i=1; i<params.energy.length; i++){
                    conditionals += "OR exercise='" + params.energy[i] + "' ";
                }
            }
            //hair shedding conditional
            if(params.hair.length === 1){
                conditionals += "AND shedding='" + params.hair[0] + "' ";
            } else if(params.hair.length != 0){
                conditionals += "AND shedding='" + params.hair[0] + "' ";
                for(var i=1; i<params.hair.length; i++){
                    conditionals += "OR shedding='" + params.hair[i] + "' ";
                }
            }
            //kid to biddability
            if(params.kid.length === 1 && params.kid === 'yes'){
                conditionals += "AND biddability = 'moderate' AND biddability = 'high";
            }
            queryStr += conditionals;
            db.query(queryStr, (err, data)=>{
                callback(data);
            });
        },
        all: (callback) =>{
            var queryStr = "SELECT * FROM breeds";
            db.query(queryStr, (err, data)=>{
                callback(data);
            });
        }
    },
    adopt: {
        post: (params, callback)=>{
            var apiQuery = `http://api.petfinder.com/pet.find?key=${credentials.pf_key}&animal=dog&location=${params.zipCode}&count=75&output=full&format=json&count=10&breed=${params.breedName}`;
            axios.get(apiQuery)
            .then((results)=>{
               callback(results.data.petfinder.pets);
            })
            .catch((err)=>{
                callback(err);
            });
        }
    },
    pictures: {
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
