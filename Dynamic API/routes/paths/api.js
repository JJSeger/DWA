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








