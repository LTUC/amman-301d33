'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose')

const server = express();
server.use(cors());
const PORT = process.env.PORT;

mongoose.connect('mongodb://localhost:27017/cats7');

const catSchema = new mongoose.Schema({
    ownerName: String,
    catName: String,
    catBreed: String
});

const catModel = mongoose.model('cat', catSchema);

function seedCatInformation() {
    const sherry = new catModel({
        ownerName: 'razan',
        catName: 'sherry',
        catBreed: 'angora'
    })
    const sandy = new catModel({
        ownerName: 'razan',
        catName: 'sandy',
        catBreed: 'angora'
    })
    const awad = new catModel({
        ownerName: 'ali',
        catName: 'awad',
        catBreed: 'baldi'
    })

    sherry.save();
    sandy.save();
    awad.save();
}

// seedCatInformation()


server.get('/', homeHandler);
server.get('/getCatsOwner',getCatsHandler)

function homeHandler(req, res) {
    res.send('all good')
}

// localhost:3001/getCatsOwner?ownerName=razan
function getCatsHandler(req,res){
    let ownerName2 = req.query.ownerName
    catModel.find({ownerName:ownerName2},function(error,ownerData) {
        if(error) {
            console.log('error in getting data',error)
        } else {
            console.log(ownerData)
            res.send(ownerData)
        }
    })
}

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})