# FriendFinder

FriendFinder
Friend Finder - A compatibility-based "FriendFinder" application.

This full-stack site will take in results user's surveys and then compare their answers with those from
other users. The app
will then display the name and picture of the user with the best overall match.
Preview Site
https://friend-finder2021.herokuapp.com/

Getting Started
To use the app, follow the installations instructions below.
Installations

Before you continue...

Please make sure you install all the dependencies you'll need for the project. Once you have Node.js
installed on your computer, navigate to the working directory and do the following in your terminal:

Before you proceed, make sure you fork the repo

###### Step 1
> npm install

The above command will install all the dependencies you need


###### Step 2
> npm install -g nodemon

The above command will install nodemon globally for you
nodemon will watch the files in the directory in which nodemon was started, and if any files
change, nodemon will automatically restart your node application.


###### Step 4
> nodemon server.js
The above command will start the server for you


###### Step 5
> Open your browser to http://localhost:3000/

If you see "Friend Finder app listening on port 3000!" in your CLI, then you're good to go!

Built With
* Node.JS
* Express
* JavaScript
* JQuery
* Bootstrap
* HTML
* CSS

Technical details
The application uses Express to handle routing

The server.js file uses the npm packages: express, body-parser, path.

The html-routes.js file should include two routes:

A GET Route to /survey which displays the survey page.

A USE route that leads to home.html which displays the home page.

The api-routes.js file includes two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends

A POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

Compatibility will be determined based on the following.

Each user's results are converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

Then a comparison of the difference between the user's scores against other users' scores, question by question and finally add up the differences to calculate the totalDifference.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

The person with the closest match will be the one with the "least" amount of differences.

Once the closest match has been determined, it will display the result back to the user in the form of a modal pop-up.

The result will display both the name and picture of the closest match.# FriendFinder
