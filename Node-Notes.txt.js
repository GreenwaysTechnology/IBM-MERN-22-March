					Node.js
..............................................................................................

What is node.js?

What is nonblocking and async programming?

Node.js Modules

NPM

How to build http applications using node module and framework called express.js

What is Node.js?

  Node.js is platform and runtime for javascript lang.

Platform: collection of tools
Runtime: Execution engine where javascript can be executed..

Why Node.js?
   Node.js is used to build non blocking web applications.
   Node.js is used to build non blocking io applications.

What is Nonblocking and blocking? Async Programming and sync Programming?

............................................................................................

How to run js code on node?

=>there are two mode

1.script mode
 
feeding the js files to node runtime

eg 
 node src/index.js

2.repl mode
  interact node js console, where we can test basic code
  node


How to write async /non blocking programming?

=>You need high level non blocking javascript api/node.js api

eg:
 timers - setTimeout
 io- fs,socket..

Styles of writting non blocking apps:

1.callback style
2.Promise style
3.async await style
 
How javascript /node understands that programs need proceed by event loops thread.
what are blocking api and what are non blocking api.

->All apis are generally blocking except apis which binds with non blocking apis.


function blockMe(message) {
    console.log(message)
}
//callback functions are higher order function
function sayGreet(callback) {
    //async api 
    setTimeout(() => { 
        callback('i am delayed function')
    }, 5000)//when this function is called thread is not blocked
}
blockMe('start')
sayGreet(function(data){
  console.log(data)
})
blockMe('end')




//

function block(message) {
    console.log(message)
}
const login = (user, password) => {
    if (user === 'admin' && password == 'admin') {
        //return promise
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }

}
block('start')
login('admin', 'admin')
    .then(response => console.log(response))
    .catch(err => console.log(err))
block('end')

///////////////////////////////////////////////////////////////////////////////////////////

Nested Callbacks, Callback Hell:

 The output of one callback, will be input to another callback.

Use case

 - call getUser api, which returns user if not , throw error.

 - Based on user i need to call login method, if login failed throw error

 - Based on login output, i need to call dashboard


const getUser = (success, failure) => {
    console.log('get User is called')
    let user = { id: 1, name: 'admin' }
    // user = null
    if (user) {
        setTimeout(success, 1000, user);
    } else {
        setTimeout(failure, 1000, { err: 'User not found' });
    }


}
const login = (user, success, failure) => {
    console.log('login User is called')

    let status = 'login success'
    let errorMessage = 'login failed'

    if (user.name === 'admin') {
        setTimeout(success, 1000, status);
    } else {
        setTimeout(failure, 1000, errorMessage);
    }

}

const showDashboard = (status, success, failure) => {
    console.log('showDashboard User is called')

    let adminpage = 'Admin Page'
    let guestpage = 'Guest Page'

    if (status === 'login success') {
        setTimeout(success, 1000, adminpage);
    } else {
        setTimeout(failure, 1000, guestpage);
    }

}

getUser(user => {
    login(user, status => {
        showDashboard(status, adminPage => {
            console.log(adminPage)
        }, error => {
            console.log(error)
        })
    }, error => {
        console.log(error)
    })
}, error => {
    console.log(error)
})


Questions:

1.Whether this code is able to understand quickly
2.Whether this code is able to debug
3.Whehter this code is scalable?
4.whether this code is maintaiable?

Yes
 "Callback Hell"

fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})

Callback Hell:

 -It is not bug or error in code
 -It is way of writing callback based program
 -Callback based non blocking programming hard to understand,maintain,debug,scale Which 
  called as "Callback Hell".

How to write better async/non blocking code without callbacks?

-Generally without callbacks not possible to write async/non blocking code.
-Rather we can abstract complexity of writting callbacks.


In 2005, JQUERY team started with working complex callback patterns, they found callback hell problem.

They proposed a  Design pattern to write better callback programming(Async) programming.

  "Promise".

Promise is design pattern which hides complexity of callback patterns


Since Promise is design pattern, many people have implemented Promise design pattern.

1.JQuery -first promise implementation
2.many libs and frameworks

...........................................................................................

In order standarize , ECMA committe decided to include Promise Design pattern at language level .(ES 6)
2012 E6 Committe introduced promise design pattern  as  "Promise" Object  in javascript.

Promises and non blocking,async and callback hell issues:
.........................................................

features of Promise Object:

1.Promise by deafult is Async. Which implements timer api with 0 ms .

Promise can be used with any async callback based  implementations.

Objective:

 To remove callbacks in async/non blocking code. write cleaner async programming.
 To remove complex callback chaining code.

Promise Implemenation:

1. Create Promise Object from Promise contructor
2. Create Promise object from factory apis 

Promise object methods:
1.then - success
2.catch - errors
3.finally - clean up
factory api to create Promise object
4.resolve
5.reject
.......................................
6.all
7.race

Steps:

1.Create Promise Object -  using either Factory or constructor

Factory Pattern vs Constructor

-1.Factor Pattern is used for simple async operations where timer is required

-2.Constructor pattern is used for wrappy any existing asyn/non blocking callback based operations eg: timer,fs,networking......

2.Get response - by registering listener methods
   -then - success 
   -catch -failures
 

//factory
function block(message) {
    console.log(message)
}
function getValue() {
    return Promise.resolve('Success') // Promise Object
}
function getError() {
    return Promise.reject('error') // Promise Object
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}

block('start')
getValue().then(res => console.log(res))
getError().catch(err => console.log(err))

login('admin', 'admin')
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
login('ff', 'admin')
.then(res => console.log(res))
.catch(err => console.log(err))


block('end')

////////////////////////////////////////////////////////////////////////////////////////////


//

function block(message) {
    console.log(message)
}


// const login = (user, password) => {
//     if (user === 'admin' && password == 'admin') {
//         //return promise ;factory pattern of creating project
//         return Promise.resolve('login success')
//     } else {
//         return Promise.reject('login failed')
//     }
// }


const login = (user, password) => {
    if (user === 'admin' && password == 'admin') {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => resolve('login success'), 5000)
        })
    } else {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => reject('login failed'), 5000)
        })
    }
}
block('start')
login('admin', 'admin')
    .then(response => console.log(response))
    .catch(err => console.log(err))
block('end')

...............................................................................................


//return user data 
const getUser = () => {
    console.log('user is called')
    let user = {
        id: 1,
        name: 'admin'
    }
    let error = {
        message: 'user not found'
    }
    // user = null;
    if (user) {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => resolve(user), 5000)
        })
    } else {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => reject(error), 5000)
        })
    }
}

const login = (user) => {
    console.log('login is called')

    let error = {
        message: 'login failed'
    }
    if (user) {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => resolve('login success'), 5000)
        })
    } else {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => reject(error), 5000)
        })
    }
}

const showDashboard = (status) => {
    console.log('showDashboard is called')
    let adminpage = 'Admin Page'
    let guestpage = 'Guest Page'
    if (status === 'login success') {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => resolve(adminpage), 5000)
        })
    } else {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => reject(guestpage), 5000)
        })
    }

}


// getUser(user => {
//     console.log(user)
//     login(user, status => {
//         console.log(status)
//         showDashboard(status, adminPage => {
//             console.log(adminPage)
//         }, error => {
//             console.log(error)
//         })
//     }, error => {
//         console.log(error)
//     })
// }, err => {
//     console.log(err)
// })

// getUser()
//     .then(user => {
//         return login(user)
//     })
//     .then(status => {
//         return showDashboard(status)
//     })
//     .then(page=>{
//         console.log(page)
//     })
//     .catch(err => console.log(err))

getUser()
    .then(user => login(user))
    .then(status => showDashboard(status))
    .then(page=>console.log(page))
    .catch(err => console.log(err))

How to refactor the above code.

async...await keywords

Promise Hell: Promise has limitions;
......................

1.Promise is still  complex when you start scalling complex async operations.

2.Which is not readable ,which uses lot of then, catch blocks

In order to write even simple complex async work flows ES 7 introduced
a concept called "async await" keywords


 It is simplest pattern of Promises.
 It is promise driven only.

         "Sync style of Async Code" 

async key must be used with function declaration.
await is used to pause async calls


async ;

-used in front of function declaration ; those functions are called async function.

async is keyword must be used infront of function- async functions


const getUser = () => {
    console.log('get User is called')
    return new Promise((resolve, reject) => {
        let user = { id: 1, name: 'admin' }
        // user = null
        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, { err: 'User not found' });
        }
    })
}
const login = user => {
    console.log('login User is called')
    return new Promise((resolve, reject) => {
        let status = 'login success'
        let errorMessage = 'login failed'
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, status);
        } else {
            setTimeout(reject, 1000, errorMessage);
        }
    })
}

const showDashboard = status => {
    console.log('showDashboard User is called')
    return new Promise((resolve, reject) => {
        let adminpage = 'Admin Page'
        let guestpage = 'Guest Page'
        if (status === 'login success') {
            setTimeout(resolve, 1000, adminpage);
        } else {
            setTimeout(reject, 1000, guestpage);
        }
    })
}

function promiseStyle() {
    getUser()
        .then(user => login(user))
        .then(status => showDashboard(status))
        .then(page => console.log(page))
        .catch(err => console.log(err))
}

async function main() {
    try {
        let user = await getUser();
        let status = await login(user)
        let page = await showDashboard(status)
        console.log(page);
    }
    catch (err) {
        console.log(err)
    }

}
main();
..............................................................................................

Modularity:
..........

In java Modularity , is presented via "Packages"

Package organize the code  logically.

Customer.java

package com.ibm.cms

public class Customer{}

Java organizes code folders and files Physically.

d:/javaapps/src/
    com/ibm/cms/Customer.java


What about javascript Modularity?

 Javascript is file based modularity physically
 but logically there is no such modularity at language level.

collection of variable declarations and function.

Once js started growing in large scale, dev struck to organize code.

2000, Smart developers started thinking about how to modualrize js code.
 

Module design patterns came.

1.Namespace design pattern : 2000 : jquery
2.AMD -Async Module Defintion : dojo
---------------------------------------------------------
3.CJS - Common JS =  namespace + amd
4.ES 6 Module design pattern  = amd + cjs
------------------------------------------------------------
5.System = AMD = CJS + ES 6
6.UMD = NAMESPACE + AMD + CJS = ES 6


only two design patterns are used in development

1.CJS - Common JS =  namespace + amd
2.ES 6 Module design pattern  = amd + cjs

CJS ; implemented inside node js. node supports commonjs by default.

I can organize the code , based on these patterns, but what about runtimes?
  js runtime never suppport these patterns directly then each design pattern is lib.

 Loaders : it is simple js lib to help link and load js files.


lets start cjs first;
......................

cjs is built in node js.
node supports cjs in built. no separate loader or linker is required
but if you run cjs code on browsers , we need loaders.


How to implement cjs in node? How to share code across the files and how to link files


keywords

-require('./folder/fileName') ==import
  to link files
-exports == export
   -used to share code in form of object
   -code is packed inside object and shared that object
-module.exports == export default
   -used to share code as it is.

src/services/util.js
//how to export variable
//cjs
exports.firstName='Subramaian'
exports.lastName='Murugan';
exports.likes = 100;
exports.status = true;
exports.greet = function(){
    return 'greet'
}
exports.skills = ['javascript','es6','react']

src/index.js
const { firstName, lastName, skills, status,  greet } = require('./services/util')

function main() {
   console.log(firstName,lastName,skills,status,greet())
}
main();

src/services/TodoService.js

class TodoService {
    findAll() {
        return 'todos'
    }
}
module.exports = TodoService

src/index.js
const { firstName, lastName, skills, status,  greet } = require('./services/util')
const TodoService = require('./services/TodoService')

function main() {
   console.log(firstName,lastName,skills,status,greet())
   let service = new TodoService();
   console.log(service.findAll())
}
main();
............................................................................................


Types of modules:

1.custom module
  built by us
2.built in modules
   provided by node.js  
3.provided by third party/community
  libs,frameworks


custom modules are
src/services/TodoService.js

class TodoService {
    findAll() {
        return 'todos'
    }
}
module.exports = TodoService

built in modules


Node js Built in modules:
..........................

File System io

Networking

etc...


1.os 

The os module provides operating system-related utility methods and properties. It can be accessed using:

//if you want any module , you need to require them(import them)

const os = require('os')

console.log(os.hostname())
console.log(os.cpus())


IO:
-disk io
-socket io/networking

NonBlocking IO And Blocking:

-node supports even blocking io. only disk io in blocking way
-node does not support blocking networking io.

File System:fs

-used to read , write into and from disk.

mode :

  - sync /blocking 
  - async/ non blocking

based on data read/write:

 -non streaming
 -streaming

const fs = require('fs');

const filePath = './src/assets/hello.txt';

const options = {
    encoding: 'UTF-8'
}

function blockMe(message){
    console.log(message)
}

blockMe('start')
//nonblocking api , async file io
fs.readFile(filePath,options,(error,data)=>{
    if (error) throw error;
    console.log(data)
})
blockMe('end')
...........................................................................................
/////////////////////////////////////////////////////////////////////////////////////////////
				HTTP-Web Programming
////////////////////////////////////////////////////////////////////////////////////////////

How to build non blocking webservers and webapps?

You can create webservers and on which you can deploy apps, unlike traditional webserver model
where webserver is separate, and app is different.

Node invented for building network io applications.

Network implementation in non blocking:

HTTP module is used to build http server,app, deployment

Node uses "single Threaded" web server model, all requests and response are performed by only one thread called "Event loop thread".



HTTP modules objects:

1.Server
  Server object is used to implement http servers/web containers
2.ServerResponse
  Object is used to send data 
3.ClientRequest
   Request object is used to handle http client requests
4.IncommingMessage
   Represents message payloads.

Note: No objects are created by us, created by node just we grab it and use .

How to build simple webserver and deploy simple app?

//how to build simple web server 
const http = require('http');


const app = (req,res) => {
   res.write('Hello,Node');
   //close the connection
   res.end();
}
//create webserver
//deploy the app on container
const server = http.createServer(app);

//start the server
server.listen(3000,()=>{
    console.log(`Server is listening @ ${server.address().port}`)
});

sending json response:
......................

//how to build simple web server 
const http = require('http');
const { getMessage } = require('./services/MessageService')

//create webserver
const app = async (req, res) => {
    // //http headers
    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // })
    // res.end(JSON.stringify(getMessage()));
    //async 
    // getMessage((message) => {
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     })
    //     res.end(JSON.stringify(message));
    // })
    //async promise 
    // getMessage().then(message => {
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     })
    //     res.end(JSON.stringify(message));
    // }).catch(err=>{
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     })
    //     res.end(JSON.stringify({error:'No message found'}));
    // })

    try {
        const message = await getMessage();
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(message));
    }
    catch (err) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({ error: 'No message found' }));
    }

}
//deploy the app on container
const server = http.createServer(app);

//start the server
server.listen(3000, () => {
    console.log(`Server is listening @ ${server.address().port}`)
});

services/message.js

class MessageService {

    //api - sync -  
    //  getMessage() {
    //     const message = {
    //         id: 1,
    //         message: 'ping',
    //         author: 'admin'
    //     };
    //     return message;
    // }
    //async callback 
    // getMessage(callback) {
    //     setTimeout(() => {
    //         const message = {
    //             id: 1,
    //             message: 'ping',
    //             author: 'admin'
    //         };
    //         callback(message);
    //     }, 1000)
    // }
    //promise
    getMessage() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const message = {
                    id: 1,
                    message: 'ping',
                    author: 'admin'
                };
                resolve(message);
            }, 1000)
        })
    }
}

module.exports = new MessageService()
..............................................................................................
	 How to build real time web apps  -REST API,Microservices,dynamic webapps
.............................................................................................

We need frameworks/libs.

How to bring frameworks or libs?
.............................................................................................
					Node Package Manager - npm 
..........................................................................................

npm is tool is used to distribute node modules to others
and you can get node modules from others.

npm tool is distributed along with node installation

npm uses public repository server called npmjs.com npmjs.org

tools and libs,frameworks all are distributed as node modules into repository.


create package.json file

>npm init

{
  "name": "nodeapps",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Subramanian Murugan",
  "license": "ISC"
}

package Types:

1.public package
  react
2.private package 
  @angular - @-npm private 

npm is used

to install,uninstall,publish node modules from node repo / into node repo.

if you install third party modules , into your project, node distributes npm tool ,using this you can install,uninstall,upgrade node modules.

installing module:

>npm install  moduleName  --options
>npm i moduleName --options


>npm install module 
  here no option is told, means default is --save

>npm i module

options:
 --save ; 
 --save-dev
 -g


App development ; three stage

1.dev
2.testing
3.production.

if you install any packages/dependencies, you can tell that is it for production and developemnt, only dev/testing

if you are installing any node module, you can tell, do you want to use only for development
or development + production.

Unit testing libs : Junit.jar===>java

 --save = >    development + production
 --save-dev => only for development

Which code need not be used for production:

1.All testing related  libs/frameworks - unit,e2e
2.Tools like compilers,frameworks related code.

Who will separate out this depedency(lib) for production/dev

  Build tools -  webpack.
  npm itself
 --production
 webpack will scan package.json---extracting prod depedencies


 --save => dev + production
 default =>dev + production

 --save-dev  -->only dev 
............................................................................................

How to install module for dev and production

npm install moduleName --save  /  npm install moduleName 


index.js

const _ = require('lodash')

console.log(_.sum([1,2,3]))
/////////////////////////////////////////////////////////////////////////////////////////////

How to install dev dependency?

 The dependency can be used only for dev.

Eg:
 Testing libs

Unit Testing:

npm install chai --save-dev

package.json
{
  "name": "nodeapps",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Subramanian Murugan",
  "license": "ISC",
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "chai": "^4.3.4"
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////

How to uninstall package/module already installed.

npm install jquery --save
npm uninstall jquery --save
///////////////////////////////////////////////////////////////////////////////////////////
				Global Modules
..........................................................................................

-Are installed not inside project, rather installed globally.

 npm install module -g

C:\Users\sasub\AppData\Roaming\npm -- here only all global modules will be installed.


Why Global Modules:

 -Tools
   compilers,webservers,build tools,testing runtime, framework runtime, cli tools for project    creations.

 eg:
  angular cli, react cli(create-react-app) .......

npm install -g @angular/cli

Demo:
....

npm install module-name(tool) -g

mocha : unit testing framwork, is used to run java script unit testing on node and browser.

npm install --global mocha
npm install -g mocha

Steps:

create test folder
 test
create spec file
test
  -demo.spec.js
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

C:\session\ibm\2021\june\nodemicroservices\nodeapps>mocha


  Array
    #indexOf()
      √ should return -1 when the value is not present


  1 passing (8ms)
.............................................................................................
			//////////////////////////////////////////////////////////////////////////////////////////////
				   Automation
/////////////////////////////////////////////////////////////////////////////////////////////

How to use javascript for automation?


We can automate js applications.

write all auotomation steps inside scripts

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }

key: value

key is called command-script command
value is task to be executed. ; task could be any thing.

command can be built in or custom commands

npm provides lot of built in commands

start,test,postinstall,preinstall..........

How to run node applications?

1.node folderName/filename.js

2.npm start
via script
how to run script

>npm commandname ---incase of built in command
>npm start

>npm run commandname - custom commands
>npm run subu

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "node src/app.js",
    "subu"  :"node src/app.js"
  },

npm test
npm start
npm run subu
///////////////////////////////////////////////////////////////////////////////////////////
		
Scripts and Global Module:

-Global modules are used for tooling purpose like compilers,build tools,servers,test runners(mocha).

Globals has some issues:

1.version and compablity issue for new projects


Steps:

1.npm uninstall mocha -g

2.>mocha --help
'mocha' is not recognized as an internal or external command,
operable program or batch file.

3.install mocha locally

 npm install mocha --save-dev

4.>mocha
'mocha' is not recognized as an internal or external command,
operable program or batch file.

Why i am getting error?
  because mocha is command, we cant run directly.

5.solution is run via scripts

package.json
"scripts": {
    "test": "mocha",
    "start": "node src/index.js",
    "subu": "node src/index.js"
  }

npm test

> nodeapps@1.0.0 test C:\session\ibm\2021\june\nodemicroservices\nodeapps
> mocha



  Array
    #indexOf()
      √ should return -1 when the value is not present


  1 passing (6ms)
............................................................................................
					Express.js
...........................................................................................
What is express?
Express Fast, unopinionated, minimalist web framework for Node.js

express is built on top of http core module.


What apps can be built using express?


1.RESTFull WebServices

2.Dynamic content generation apps -  spring mvc, .netmvc.   with ui

Core features of Express:

1.Abstraction on core http module
2.lot of apis to send data like json api
3.routers : to create HTTP based web services and apps quickly.
4.middlewares : to extend core framework like - logging,database,security,templates...


Express Key concepts: in express every thing object

Objects in express

1.Application
  We call Container object which other objects
  entry and exit of an application
  application is created by calling function

2.Request

3.Response

4.Router


1.Application object roll:

-Routing HTTP requests
-Configuring middleware
-Rendering HTML views
-Registering a template engine

How to setup express project?

There are two ways

1.manual setup
2.using tool - npm install -g express-generator



1.manual setup:

create folder
create src
create package.json
install depedencies

npm install express --save

const express = require('express')

//create app object 
const app = express();

//REST API 
// HTTP Verb  - URL (GET  /api/products/list)

app.get('/api/products/list', (req, res) => {
    const products = [{ id: 1, name: 'p1', price: 100 }]
    res.status(200).json(products)
})
app.post('/api/products', (req, res) => {
    
    res.status(200).json({message:'save called'})
})
app.put('/api/products', (req, res) => {
    res.status(200).json({message:'update called'})
})
app.delete('/api/products', (req, res) => {
    res.status(200).json({message:'delete called'})
})
//server start
app.listen(3000, () => {
    console.log('Express Server is Running')
})


modularation of express app:

express provides a concept called "Routers" -  way to isloate code logically and physically

src/routers/products.js

const express = require('express')

const productRouter = express.Router();

productRouter.get('/list', (req, res) => {
    const products = [{ id: 1, name: 'p1', price: 100 }]
    res.status(200).json(products)
})
productRouter.post('/', (req, res) => {
    
    res.status(200).json({message:'save called'})
})
productRouter.put('/', (req, res) => {
    res.status(200).json({message:'update called'})
})
productRouter.delete('/', (req, res) => {
    res.status(200).json({message:'delete called'})
})

module.exports = productRouter;

const express = require('express')
const productRouter = require('./routers/products');
const userRouter = require('./routers/users')

//create app object 
const app = express();
//link the routers with app.

app.use('/api/products',productRouter)
app.use('/api/users',userRouter)


//server start
app.listen(3000, () => {
    console.log('Express Server is Running')
})
///
reading payload -  parameters body


middlewares:
iddlewares:

 - plugins , can  be plugged


types of middlewares

1.built in middlewares
2.third party middlewares
3.custom middlewares.



Use case :
 How to read JSON input. Express server need to read json which was submitted by endusers 
User will submit as json --- express need to convert into javascript object.

Without Middleware :

1.we need to register on, end event for reading input
2.we need to convert input into javascript object - JSON.parse()


app.post('/api/todo', async (req, res) => {

    let todo = '';
    req.on('data', chunk => {
        todo += chunk
    })
    
    req.on('end', async() => {
        try {
            console.log(todo)
            const todos = await create(todo);
            res.status(201).location("/api/todo").json({ message: 'Todo Created' })
        }
        catch (error) {
            res.status(500).json({ message: error })
        }
    });

})

With Middleware :

-any middleware is simple javascript module/package only.
-most of the middlewares are community driven.
-if you want any middleware you need to install  

https://expressjs.com/en/resources/middleware.html

body-parser
Node.js body parsing middleware.

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

Parsers supported by body-parser Middleware:
.............................................

This module provides the following parsers:

1.JSON body parser
2.Raw body parser
3.Text body parser
4.URL-encoded form body parser

Steps:

1.install middleware
$ npm install body-parser

2.Any Middleware must be registered with Application Object.
in order to activate middleware.

app.use(middleware)

const express = require('express') // function
const { findAll, create } = require('./services/TodoService')
const bodyParser = require('body-parser')

const port = 3000;

const app = express();


// parse application/json
app.use(bodyParser.json())


//routing
app.get('/', (req, res) => {
    res.end('Home')
})
//todo api
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await findAll();
        res.status(200).json(todos);
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})
//without middleware
app.post('/api/v1/todo', async (req, res) => {

    let todo = '';
    req.on('data', chunk => {
        todo += chunk
    })

    req.on('end', async () => {
        try {
            console.log(todo)
            const todos = await create(todo);
            res.status(201).location("/api/todo").json({ message: 'Todo Created' })
        }
        catch (error) {
            res.status(500).json({ message: error })
        }
    });

})
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await findAll();
        res.status(200).json(todos);
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})

//with middleware
app.post('/api/v2/todo', async (req, res) => {
    try {
        const todo = req.body;
        console.log(todo)
        const todos = await create(todo);
        res.status(201).location("/api/todo").json({ message: 'Todo Created' })
    }
    catch (error) {
        res.status(500).json({ message: error })
    }


})

//start server
app.listen(port, () => {
    console.log(`Express Server is running on ${port}`)
})
/////////////////////////////////////////////////////////////////////////////////////////
				Database Integration
...........................................................................................
Mongodb:

How to connect to a MongoDB database hosted on MongoDB Atlas/commmunity mongo server from inside of a Node.js script (


How MongoDB stores data in documents and collections (instead of rows and tables)


How to create documents using insertOne() and insertMany() 
How to read documents using findOne() and find() 
How to update documents using updateOne() with and without upsert as well as updateMany() 
How to delete documents using deleteOne() and deleteMany() 


How MongoDB Stores Data

MongoDB stores data in BSON documents. BSON is a binary representation of JSON (JavaScript Object Notation) documents. When you read MongoDB documentation, you'll frequently see the term "document," but you can think of a document as simply a JavaScript object. For those coming from the SQL world, you can think of a document as being roughly equivalent to a row.

MongoDB stores groups of documents in collections. For those with a SQL background, you can think of a collection as being roughly equivalent to a table.

document - row
collection - table

Every document is required to have a field named _id. 

The value of _id must be unique for each document in a collection, is immutable, and can be of any type other than an array. 

MongoDB will automatically create an index on _id. You can choose to make the value of _id meaningful (rather than a somewhat random ObjectId) if you have a unique value for each document that you'd like to be able to quickly search

document

{
   "_id": "10057447",
   "listing_url": "https://www.airbnb.com/rooms/10057447",
   "name": "Modern Spacious 1 Bedroom Loft",
   "summary": "Prime location, amazing lighting and no annoying neighbours.  Good place to rent if you want a relaxing time in Montreal.",
   "property_type": "Apartment",
   "bedrooms": {"$numberInt":"1"},
   "bathrooms": {"$numberDecimal":"1.0"},
   "amenities": ["Internet","Wifi","Kitchen","Heating","Family/kid friendly","Washer","Dryer","Smoke detector","First aid kit","Safety card","Fire extinguisher","Essentials","Shampoo","24-hour check-in","Hangers","Iron","Laptop friendly workspace"],
}

How to setup mongo in node.js?

-install driver
npm install mongodb

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    // the following code examples can be pasted here...
    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);

    return 'done.';
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
...........................................................................................
				End to End App
...........................................................................................

View - React
Node,Express,Mongo


