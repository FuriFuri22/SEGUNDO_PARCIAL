const { MongoClient } = require('mongodb');

const mongoDB = async() =>{
// Url de la coneccion
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const nombreDB = 'parcial_2';

async function coneccion(){
  // Use connect method to connect to the server
  await client.connect();

  console.log('Coneccion exitosa');

  const db = client.db(nombreDB);

  //const collection = db.collection('documents');


  return 'done.';
}

coneccion()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

}

module.exports = mongoDB