const db = require('../db/index.js')

app.get('/allDogs', function (req, res) {
  //database call for allDogs, fun
  res.send('hello world')
}) //from DB

app.get('rescues') //petfinder api call that returns a list of dogs belonging to the breed clicekd on

`http://api.petfinder.com/pet.find?key=6bfd4e7144254f8d048242e5d067a696&animal=dog&location=10017&count=75&output=full&format=json&count=10&breed=${breed}`

//note:spaces are '%20', so the dog breed (pulled from state with a click handler?) will likely need to be altered before the api call goes out