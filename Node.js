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
 ios- fs,socket..

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






