'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose')

const server = express();
server.use(cors());
const PORT = process.env.PORT;
// Middleware to decode any request body to json
server.use(express.json());

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
server.get('/getCatsOwner', getCatsHandler)
server.post('/addCat', addCatHandler);
server.delete('/deleteCat', deleteCatHandler);
server.put('/updateCat', updateCatHandler);

function homeHandler(req, res) {
    res.send('all good')
}

// localhost:3001/getCatsOwner?ownerName=razan
function getCatsHandler(req, res) {
    let ownerName2 = req.query.ownerName
    catModel.find({ ownerName: ownerName2 }, function (error, ownerData) {
        if (error) {
            console.log('error in getting data', error)
        } else {
            // console.log(ownerData)
            res.send(ownerData)
        }
    })
}


// /addCat?ownerName1=razan&catName1=mishmish&catBreed1=baldi
// /addCat
async function addCatHandler(req, res) {
    // console.log(req.query);
    // let { ownerName1, catName1, catBreed1 } = req.query;
    console.log(req.body);
    let { ownerName1, catName1, catBreed1 } = req.body;
    // const newCat = new catModel({
    //     ownerName: ownerName1,
    //     catName: catName1,
    //     catBreed: catBreed1
    // })
    // await newCat.save(); //.then

    await catModel.create({
        ownerName: ownerName1,
        catName: catName1,
        catBreed: catBreed1
    })

    catModel.find({ ownerName: ownerName1 }, function (error, ownerData) {
        if (error) {
            console.log('error in getting data', error)
        } else {
            // console.log(ownerData)
            res.send(ownerData)
        }
    })


}

// /deleteCat?catID=${catID}&ownerName=razan
function deleteCatHandler(req, res) {
    let catID = req.query.catID;
    let ownerName1 = req.query.ownerName;
    // catModel.remove({_id:catID},(error,deletedData)=>{
    //     if (error) {
    //         console.log('error in deleting the data')
    //     } else {
    //         console.log('deleteddddd',deletedData)
    //         catModel.find({ ownerName: ownerName1 }, function (error, ownerData) {
    //             if (error) {
    //                 console.log('error in getting data', error)
    //             } else {
    //                 // console.log(ownerData)
    //                 res.send(ownerData)
    //             }
    //         })
    //     }
    // })

    catModel.deleteOne({ _id: catID }).then(() => {
        catModel.find({ ownerName: ownerName1 }, function (error, ownerData) {
            if (error) {
                console.log('error in getting data', error)
            } else {
                // console.log(ownerData)
                res.send(ownerData)
            }
        })
    })



}

function updateCatHandler(req, res) {

    console.log('updateee', req.body)
    let { catName, catBreed, catID,ownerName1 } = req.body;
    catModel.findByIdAndUpdate(catID, { catName, catBreed }, (error, updatedData) => {
        if (error) { console.log('error in updating') }
        else {
            console.log('updatedData', updatedData);
            catModel.find({ ownerName: ownerName1 }, function (error, ownerData) {
                if (error) {
                    console.log('error in getting data', error)
                } else {
                    // console.log(ownerData)
                    res.send(ownerData)
                }
            })
        }
    })
}

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})