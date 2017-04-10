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
    const values = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',

        //this defines the random function
    function execute = (){

        //this is the formula for the random number
        return Math.floor(Math.random() * (values.length + 1));
    }



    // this generates the function loop
    function generate() {
        string ='';

        // this  runs the populate string function 3 times
        for (let x = 0; x < 4; x += 1) {
            //this populates string with random number
            string += values.charAt(execute());
        }

    }

    //generate loop
    generate();

    //this checks if string is at least four chars long
    if (string.length < 4 || string.length === 3) {
        // this excutes gen again
        generate();
    }

    // this sets the gen url
    const gen = {
        short: 'http://localhost:' + port + '/' + string,
        code: string,
        create: generate(),
    };

    // returning string
    return gen;
};




