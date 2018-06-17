## FriendFinder
FriendFinder is a web-based application that allows a user to answer questions in a survey and then matches that person to another person registered in the application as a best match for a friend. Friend Finder uses an algorithm to find differences between the person taking a survey to those already registered. It will then retrieve a picture and name of the person with the least difference. Currently, the application saves data in an array of objects with each object having an array of scores. There is no persisistence right now as the main focus of the application was on developing APIs on the server to respond to front-end website requests.


## Technology
An Express server with Body-Parser as middleware and the path npm module have been used in the development of this application.


## Application
The application can be accessed on [Heroku](https://gentle-plains-62498.herokuapp.com/)