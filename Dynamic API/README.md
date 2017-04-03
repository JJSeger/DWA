## DESCRIPTION
This is a simple application that will take a url that the user inputs in to the front end of the app and will cache that url on the application’s server and return a shortened version of that url. When the user then access the shortened url, the application will then redirect the use to the original url that inputted in to the app from the database.

---
###### INSTALL/APPLICATION SET UP
The installation guide will show you step by step how to install, set up, configure and run our application. Happy coding in our open source playground.

1.	To start, you can either clone or download the repository from github. After the download, has finished, place the folder of the app where ever you would like to have the app to exist.
2.	Open an instance of the __command line__ and navigate to the root folder of the app.
3.	Once in the root of the app, run the command, `npm install`, this will install and create all the module files needed to run the application.
4.	Now your application is install and ready to be connected to your database

###### DATABASE SET UP
Now that you have the application files completely installed on your system, you can now connect it to a database and have the data that it creates persist and be intractable. This application uses __MySQL__ along with a __SQL__ based __ORM__. Please ensure that the database type you are using is __MySQL__ for that reason.

1.	Choose a MySQL client and or service to install and configure on your server. This guide uses __PHPMyAdmin__ if you would like to use the same and follow long.
2.	After you have install __MySQL__ and configured your .ini files along with PHP, you are now ready to obtain your access your database.
3.	Next you'l want to create a database called, “url-shortener”, as well as a table inside that database named, “urls”.
4.	Once complete, create a user and or obtain the user connection credentials of your database connection, these include the database location (ie “localhost”), user name and pass word, if set.
5.	Check your credentials and then run your database. Congratulations, you may not connect your app to a database.

###### RUNNING THE APPLICATION
You are now ready to configure the application with the database credentials you have obtained from your readied database and launch on your choice of port.

1.	Navigate to the root level of your application using the terminal or command line prompt.
2.	Navigate to the root level of your application using a file explorer and find a filed named, “dev.js” at the root of the project and open that file.
3.	Inside this file you will several parameters that describe your database connection and port. Change these parameters to the credentials that you obtained from your database and choose your preferred port number.
4.	Once you have configured the file, change the file name to “development.js”.
5.	Make sure to have your database running and development.js file saved; now using your terminal/command line, run the command `npm start`.
Congratulations, your app is now running on your chosen port number. To access the app, navigate to “localhost:YourPort/” in your choice of browser.

###### FILE META
The file meta data will always be at the top of the file and will consist of the name of the file followed by its description and functionality within the application.

###### LINE DESCRIPTION
Line descriptions serve as short and concise descriptions of either one line or several conjoined lines of code as well as they involvement in the application.

###### SPACING
All spacing with be 2 lines tall of non occupied lines breaks to show that a section has been completed. These spaced will then be followed by either new code blocks or section seperators.


###### SEPERATORS
Seperators wil serve as division points between sections of code that are seperate by fall under the same sections. They will use the A to B link commend and have the symbols -*- at in them.

###### HEADINGS
Headings will be used to descrip large chunks and or grouped code that either shares or ties in to the same functionaility within the aplications. they will be A to B line comments with the symbols -*- st the beggining and end of the heading text.

---
## FUNCTIONALITY
##### ACCESSING THE APPLICATION
To access the application’s front end, simply run the app and then go to, *http://localhost:yourPort/* in any browser and you will be taken to the front page of the application. The front page will present you with on input as well as one button. Paste your url in the input labeled as such and click the execute button to be activate the app. You will be given a shortened url that will be a representation of your originally pasted url saved in your database.

##### APPLICATION FUNCTIONALITY ROUTES
+ __GET: Front page__
    + *Route: __'/'__ : This route when accessed will return a rendered html page for the front page of the application.*
+  __GET: Short Url Redirect__
    + *Route: __'/go/:id'__ : This route when accessed with a URL database ID in the path will search the database for any URLs with a matching ID code and redirect the user to that original URL saved with that ID.*

##### APPLICATION API END POINTS
+  __GET: Return All URLs__
    + *Route: __'/api/v1/url/'__ : This route will return a single object that will have enclosed the full list of URLs that were retrieved from the databse.*
        + Example: `{ data: [{item1: itemData}, {item2: itemData}] }`
+  __GET: Return Single URLs__
    + *Route: __'/go/:id'__ : This route will return a single URL based on the given URL's id parameters.*
        + Example: `{ data: { origiganlUrl: 'google.com', shortUrl: 'localhost:3000/8huy', urlId: '8huy' } }`
+ __POST: Create a URL__
    + *Route: __'/api/v1/url'__ | Body: __{ url: string }__ : This route takes parameters from a post body and created a new URL in our database as well as generates a short URL and urlId; The returned data will be the data created and saved as well as confirmation that the database procedures succeeded.*
        + Example Output: `{ data: { origiganlUrl: 'google.com', shortUrl: 'localhost:3000/8huy', urlId: '8huy' } }`
+ __POST: Update a URL__
    + *Route: __'/api/v1/url/:id'__ | Body: __{ url: string }__ : This route takes parameters from a URL parameter and used that to search the database for an existing url instance and will update the original url parameter with the new URL.*
        + Example Output: `{ data: { origiganlUrl: 'newUrl.com', shortUrl: 'localhost:3000/8huy', urlId: '8huy' } }`
+  __DELETE: Delete Single URL__
    + *Route: __'/go/:id'__ : This route will take a given URL parameter and extract the ID from that to find the selected URL from the database and drop that instance of it. The returned states will confirm the database actions and will also return a integer based Boolean.*
        + Example: `{ data: 1 }`
