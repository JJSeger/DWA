/**
 * Created by JuddHome on 4/2/17.
 */

/*This file contains the environmental varibles - You must configure this file with your
database and environmental variables.
- Rename this file to development.js to properly connect to the database */



    //Object to be exported
var data={
    // localhost connection
    sqlLocation:'localhost',
    // database user
    sqlUser: 'root',
    // database password
    sqlPassword: null,
    // database port
    port: 3000

}
    //exporting the object
module.exports= data