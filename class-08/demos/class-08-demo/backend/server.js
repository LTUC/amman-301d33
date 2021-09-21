'use strict';

const cors = require('cors');
const express = require('express');
require('dotenv').config();
const axios = require('axios');

const server = express();

const PORT = process.env.PORT;

server.use(cors());


// Routes
server.get('/', homeRouteHandler);
server.get('/getPhoto', getPhotoHandler);
server.get('*', notFoundHandler);


// Function Handlers
function homeRouteHandler(req, res) {
    res.send('home route')
}

// localhost:3001/getPhoto?searchQuery=flower
// async function getPhotoHandler(req, res) {
//     // res.send('inside getPhoto')
//     let searchQuery2 = req.query.searchQuery; // flower
//     // key-url
//     // https://api.unsplash.com/search/photos?query=flower&client_id=
//     let photoURL = `https://api.unsplash.com/search/photos?query=${searchQuery2}&client_id=${process.env.UNSPLASH_KEY}`
//     console.log(photoURL);
//     let newPhotoArray = []

//     console.log('before sending request');


//     try {
//         console.log('inside sending request');
//         let photoResults = await axios.get(photoURL)
//         // res.send(photoResults.data)
//         newPhotoArray = photoResults.data.results.map(item => {
//             return new Photo(item)
//         })
//         res.send(newPhotoArray)
//         // console.log(newPhotoArray);
//     } catch (error) {
//         console.log('error in getting data from unsplash', error)
//     }


//     console.log('after sending request');
// }

async function getPhotoHandler(req, res) {
    // res.send('inside getPhoto')
    let searchQuery2 = req.query.searchQuery; // flower
    // key-url
    // https://api.unsplash.com/search/photos?query=flower&client_id=
    let photoURL = `https://api.unsplash.com/search/photos?query=${searchQuery2}&client_id=${process.env.UNSPLASH_KEY}`
    console.log(photoURL);
    // let newPhotoArray = []

    console.log('before sending request');

    axios
        .get(photoURL)
        .then(photoResults => {
            console.log('inside sending request');
            let newPhotoArray = photoResults.data.results.map(item => {
                return new Photo(item)
            })
            res.send(newPhotoArray)
        }).catch(error => {
            res.send(error)
        })

    console.log('after sending request');
}

function notFoundHandler(req, res) {
    res.status(404).send('NOT FOUND!!')
}

function notFoundHandler(req, res) {
    res.status(404).send('NOT FOUND!!')
}

//Classes
class Photo {
    constructor(item) {
        this.imageUrl = item.urls.small
    }
}

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})