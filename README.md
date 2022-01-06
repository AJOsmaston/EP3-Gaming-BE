<div align="center">
  <h1> EP3-Gaming-BE </h1>
  <h2>Engineering Project 3 - Gaming - Back-End</h2>
  <h3> AKA Life of Bernard </h3>

[Tech Stack](#stack) | [Setup](#setup) | [Tests and code coverage](#test)
</div>

## <a name="stack">Tech Stack</a>

| Logo | Name | Usage |
| --- | --- | --- | 
| <div align="center"><img src='https://nodejs.org/static/images/logo.svg' height='40px' /></div> | <a href='https://nodejs.org/en/'>Node.js</a> | An asynchronous event-driven JavaScript runtime, used in this app to run the main server and house most of the game logic. |
| <div align="center"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png' height='40px' /></div> | <a href='https://www.mongodb.com/'>mongoDB</a> | A NoSQL cloud database program, used in this app to store the user accounts, sessions and game scores. |
| <div align="center"><img src='https://miro.medium.com/max/1400/1*XP-mZOrIqX7OsFInN2ngRQ.png' height='40px' /></div> | <a href='https://expressjs.com/'>Express.js</a> | A minimal and flexible Node.js web application framework, used in this app to expose endpoints for the API's for the Game and Users. |
| <div align="center"><img src='https://pbs.twimg.com/profile_images/599259952574693376/DMrPoJtc_400x400.png' height='40px' /> </div> | <a href='https://www.passportjs.org/'>Passport.js</a> | An authentication middleware for Node.js. Used in this app to handle encryption of passwords. |
| <div align="center"><img src='https://ih1.redbubble.net/image.404020079.1876/st,small,507x507-pad,600x600,f8f8f8.u7.jpg' height='40px' /> </div> | <a href='https://jestjs.io/'>Jest</a> | A JavaScript testing framework, used in this app as our testing library. |
| <div align="center"><img src='https://eslint.org/assets/img/favicon.512x512.png' height='40px' /> </div> | <a href='https://eslint.org/'>ESLint</a> | A static code analysis tool for identifying problematic patterns found in JavaScript code. Used in this project as our code quality linter. |

## <a name="setup">Setting up</a>

* Clone the repository  
`git clone https://github.com/AJOsmaston/EP3-Gaming-BE.git`
* Navigate to the project  
`cd EP3-Gaming-BE`
* Install the dependencies  
`npm install`
* Create an .ENV file  
`touch .ENV`
* Insert the following {fill in these options}:
```
DB={Connection string for mongoDB database}
PORT={Specify a port here: by default it will run on 5000}
```
* Run the server  
`npm start`  

On success, you should see:  

![server running](/media/d6da46c398659cd88f0950e7d63744e7.png)

## <a name="test">Tests and Coverage</a>

* To run jest for game coverage:  
`npm run test`  

![Test coverage](/media/954c8c414db4fd8a220007c9bf879f1c.png)
<!-- TODO: add tests for API endpoints -->
