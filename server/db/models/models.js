var db = require('../../db/index.js');
var axios = require('axios');

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
            
            //size to weight conditional
            if(params.size.length === 1){
                conditionals += "weight_m_low " + sizeToWeight[params.size[0]] + " ";
            } else if(params.size.length != 0){
                conditionals += "weight_m_low " + sizeToWeight[params.size[0]] + " ";
                for(var i=1; i<params.size.length; i++){
                    conditionals += "OR weight_m_low " + sizeToWeight[params.size[i]] + " ";
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
            
            queryStr += conditionals;
            // {
            //     hair: ['low', 'moderate', 'high'], //shedding
            //     kid:  ['low', 'moderate', 'high'], //biddability
            //     playful: ['low', 'moderate', 'high']
            // }
            console.log('here is the queryStr');
            console.log(queryStr);
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
        get: (params, callback)=>{
            var apiQuery = `http://api.petfinder.com/pet.find?key=${credentials.pf_key}&animal=dog&location=10017&count=75&output=full&format=json&count=10&breed=${params.breed}`;

            axios.get(apiQuery)
            .then((results, callback)=>{
               callback(err);
            })
            .catch((err)=>{
                callback(err);
            });
        }
    }
};
