/**
 * Created by JuddHome on 4/2/17.
 */




var port = require('../development').port;


module.exports = ()=>
{
    var string = ''
    values = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',

        execute = () =
>
    {
        return Math.floor(Math.random() * (values.length + 1));
    }
,
    shortUrl = {};

    function generate() {
        string = '';
        for (x = 0; x < 4; x++) {

            string += values.charAt(execute());
        }
    }

    generate();


    if (string.length < 4 || string.length == 3) {

        generate();

    }

    const gen = {
        short: 'http://localhost:' + port + '/' + string,
        code: string
    }

    return string;


}
