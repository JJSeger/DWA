/**
 * Created by JuddHome on 4/2/17.
 */



//Environmental credentials
const port = require('../development').port;

//Export function for use in server.js
module.exports = ()=>
{
    //cache return string
    let string = '';
        //string for generating random code
    const values = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        //this defines the random function
    function execute = () =>{

            //this is the formula for the random number
        return Math.floor(Math.random() * (values.length + 1));
        }


    //generate loop
    function generate() {
        //resets string
        string = '';

        //runs the populate string function three times
        for (let x = 0; x < 4; x+=1 ) {
            //this populates string with random numbers
            string += values.charAt(execute());
        }
    }


    //initiates generate
    generate();

    //This checks to make sure that the string is at least 4  chars long
    if (string.length < 4 || string.length == 3) {



        //initiates generate again
        generate();

    }



    //This sets the generate url
    const gen = {
        short: 'http://localhost:' + port + '/' + string,
        code: string
    }

    //returns gen
    return gen;


}
