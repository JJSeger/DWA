
# Dynamic API
<br>Created by Judd Seger<br>
--------

# PURPOSE
--------
This Dynamic API/Url Shortener is setup to permit users to enter a regular url for the app and receive a shortened url.<br>

# INSTALLATION
--------


 1. "Clone or Download" repo at the top of the page.
 2. After completing the download/cloning you will have to open up your terminal and download the following:
  a. Install npm "npm install"<br>
  b. Install nodemon "npm install nodemon"<br>
  c.  Start your server "node src/server.js"<br>
 3. Your server should be running on port 3000!<br>

 You can use postman in Chrome if you don't have it on your computer<br>
 Do a POST request to localhost:3000/api/v1/url<br>
 This will return a shortened URL<br>

 #APICRUD---
 You are going to need mySQL, so you will have to create a .env file<br>

 Do this by typing into terminal  { touch .env } <br>
 then add the following information <br>

	DB_NAME=[database name] <br>
	DB_USER=[username] <br>
	DB_PASS=[password] <br>
	DB_HOST=[host] <br>
	DB_SCHEMA=mysql <br>
	DB_PORT=[port] <br>
<br>

You can check the status in Postman by doing a GET request to localhost:3000/api/v1/url<br>
---------
# STARTING POINT
<br>
The starting point is always localhost:3000<br>
<br>
# ENDPOINTS
<br>
STATUS<br>

GET: /status<br>
POST /api/v1/urls<br>
  Shortened URL created<br>
GET /api/v1/urls<br>
  Display every URL<br>
GET /api/v1/urls/:id<br>
  Display URL based on id<br>
POST /api/v1/urls/:id<br>
  Update URL based on id<br>
DELETE  /api/v1/urls/:id<br>
  Delete url based on id<br>
---------------
# Usage<br>
-- UTILITY TOOL --
Make sure that you go to your directory to activate Debugging<br>

  Pleas follow the following steps:<br>
   1. DEBUG=true node src/server.js<br>
  you should see Debugging Activated, if you were successful.<br>
   2.DEBUG=false node src/server.js<br>
  if you do not want debgugging activated.<br>
-------------

# CODING STYLE

<br>
This project utilized eslint-config-airbnb for the code styling.<br>
This was accomplished by installing the plugin for Atom.<br>
You can find documentation about eslint here:<br> [eslint-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) <br>
and for installing on Atom you can find the documentation here.<br>
[eslint for Atom](https://atom.io/packages/eslint).
--------------

# UNIT TESTING
In order for this to work you MUST HAVE mocha and chai installed using npm globally.<br>
Once you have done this you can run a test for each route.<br>

For the /go/:shortenedURL test the short url of CHfApl<br>
for this to be accomplished CHfApl needs to be in your database.<br>

** .get('/go/CHfApl') ---This has to be in the database---
<br>

# Work Flow<br>
  1. Create a new branch with in your git repo<br>
      i. git <branch_name><br>

  2. Make your changes then commit and push <br>
        i.   git add A<br>
        ii.  git commit -m 'commit message'<br>
        iii. git push <branch_name> <br>

  3. Merge your master branch with the feature branch that you created<br>
        i.   git master<br>
        ii.  merge <branch_name><br>
        iii. push master<br>

        <br>

---------------
----------------
# DEPLOY TO HEROKU
  git push master

The url-shortener will go into staging once test has passed through codeship.<br>
This should allow you to test on Heroku. <br>


