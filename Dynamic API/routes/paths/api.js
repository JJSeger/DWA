/**
 * Created by JuddHome on 4/2/17.
 */

//this defines the express router

const api = require('express').Router();
    //this imports the database connection
const db = require('../../models/url');
    //this imports id and short url gen
const gen = require('../../modules/generator');


// API routes
api
    //returns the urls
    .get('/', (req, res) => {
        //this logs route access
        console.log('\n###### Route for all URLs has been accessed\n---');
        //this searches the database and returns them as a list
        db.findAll({}).then((dbdata)=>{ res.json({ data: dbdata }) })

    })

    //this returns one url
    .get('/:id', (req, res) => {

        //this loggs route access
        console.log('\n###### Route for single url has been accessed\n---');

        //this is using the id param
        db.find({ where: { urlId: req.params.id } }).then((data)=>{

            //this returns single url
            res.json({ data: dbdata })

        });

    })


    //creates a url
    .post('/', (req, res) => {


        //log route access
        console.log('\n###### Route to create url have been accessed\n---');



        //data object cache
        const id = gen();
        //instantiate object to be saved and connects data
        const newUrl = {
            originalUrl: req.body.url,
            shortUrl: id.short,
            urlId: id.code
        };


            //this tell the model to save data to the database

        db.create(newUrl).then((dbdata)=>{

            // This responds with the saved data and 200 message
            res.status(200).json({data: dbdata});

        });

    })



    // update url
    .post('/:id', (req, res) => {
        // this logs route access
        console.log('\n###### Route to update url have been accessed\n---');





        // this tells model to save data object to database
        db.find({ where: { urlId: req.params.id } }).then((updating) => {




            // this tells model to update record with request body
            updating.update({ originalUrl: req.body.url })
            .then((dbdata) => {




                // this sves new data to db
                db.save;



                // responds with saved data and a 200 status
                res.status(200).json({ data: dbdata });

            });

        });
    })





    // this deletes the url
    .delete('/:id', (req, res) => {





        // this logs route access
        console.log('\n###### Route to drop Url has been accessed.\n---');




        // find and drop url from url tables using ID
        db.destroy({ where: { urlId: req.params.id } }).then((dbdata) => {




            // responds with a 200 status
            res.status(200).json({ data: dbdata });
        });
    });





// this exports module
module.exports = api;


