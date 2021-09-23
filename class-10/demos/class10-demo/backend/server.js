'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios')
const server = express();
server.use(cors());
const PORT = process.env.PORT;
let cacheMemory = {};
console.log(cacheMemory);
// ROUTES
server.get('/', homeHandler);
server.get('/photos', getPhotoHandler)
server.get('*', notFoundHandler);

// Function Handlers
function homeHandler(req, res) {
    res.send('all good')
}
function getPhotoHandler(req, res) {
    let photoSearchQuery = req.query.searchQuery;
    let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&query=${photoSearchQuery}`;
    if (cacheMemory[photoSearchQuery] !== undefined) {
        console.log('the cashe contain data ')
        console.log(cacheMemory);
        res.send(cacheMemory[photoSearchQuery]);
    } else {
        console.log('cache memory is empty hit the api')
        try {
            axios.get(url).then((photoResults) => {
                let photoArray = photoResults.data.results.map(photo => {
                    return new Photo(photo)
                })
                cacheMemory[photoSearchQuery] = photoArray;
                res.send(photoArray)
            })
        }
        catch (error) {
            console.log('error from axios', error)
            res.send(error)
        }
    }

}
function notFoundHandler(req, res) {
    res.status(404).send({
        "error": "Unable to get the route"
    })
}
class Photo {
    constructor(photoData) {
        this.imageUrl = photoData.urls.raw;
        this.likes = photoData.likes;
    }
}
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})