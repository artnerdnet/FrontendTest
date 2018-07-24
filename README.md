# FrontendTest

Github user search tool is a simple tool to see the basic information from an user in Github.

## How to run it locally

To run it locally you can use node.js http-server:

#### http-server: a command-line http server
Installing globally:
Installation via npm:

````
 npm install http-server -g
````

This will install http-server globally so that it may be run from the command line.

Usage:
````
 http-server
````

You can access the app by typing in your broswer http://127.0.0.1:8080

![Initial screen](https://github.com/artnerdnet/FrontendTest/blob/develop/img/screenshots/1initscreen.jpg)

Once it's running, type the GitHub username you want to search for and hit the search button. You will be able to see:
- Username
- Full name
- Bio (scrollable)
- Repositories list (scrollable) with repository name (linked), number of forks and number of stars.

![Searched username](https://github.com/artnerdnet/FrontendTest/blob/develop/img/screenshots/2searchedusername.jpg)

If the username you are looking for doesn't exist, then an error message will display below the search box.

![Error message](https://github.com/artnerdnet/FrontendTest/blob/develop/img/screenshots/3error.jpg)
