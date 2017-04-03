/**
 * Created by JuddHome on 4/2/17.
 */

//this defines the express router

var api = require('express').Router(),
    //this imports the database connection
    db = require('../../models/url'),
    //this imports id and short url gen
    gen = require('../../modules/generator');


// API routes
api
    //returns the urls
    .get('/', (req, res) => {
        //this searches the database and returns them as a list
        db.findAll({}).then((data)=>{ res.json({ data: data }) })

    })

    //this returns one url
    .get('/:id', (req, res) => {
        //this is using the id param
        db.find({ where: { urlId: req.params.id } }).then((data)=>{

            //this returns single url
            res.json({ data: data })

        })

    })


    //creates a url
    .post('/', (req, res) => {


        //data object cache
        var id = gen(),
            //instantiate object to be saved and connects data
            newUrl = {
                originalUrl: req.body.url,
                shortUrl: id.short,
                urlId: id.code
            };


            //this tell the model to save data to the database

        db.create(newUrl).then((data)=>{

            // This responds with the saved data and 200 message
            res.status(200).json({data: data})

        })

    })



        //this deletes the url
    .delete('/:id', (req, res) => {

        //this finds and dropps url from url tables using the id
        db.destroy({where: {urlId: req.params.id}}).then((data)=>{
            //respond with 200 mand boolean for succes
            res.status(200).json({data: data})


        })

    })


//this exports module as object
module.exports = api;


