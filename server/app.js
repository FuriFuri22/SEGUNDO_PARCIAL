const express = require('express');

const db = require('./db/mariadb')
const dbmongo =  require('./db/mongodb')
const app = express();
const cors = require('cors')

app.use(express.json());


dbmongo();

db();



app.use(cors());

app.listen(5000, ()=>console.log('server corriendo'))
