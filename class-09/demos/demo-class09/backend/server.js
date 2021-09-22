'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const handleMovie = require('./modules/movies.js')


const PORT = process.env.PORT;
const server = express();
server.use(cors());

server.get('/', (req, res) => {
    res.send('home route')
})

// localhost:5001/movie?searchQuery=amman&page=15&title=razan
server.get('/movie', handleMovie);


server.get('*', (request, response) => {
    response.status(404).send('not found');
})

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
