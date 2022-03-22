//how to pass function as parameter

let add = function (a = 1, b = 2) {
    return a + b;
}
console.log(add(2, 3)) //here we pass numbers.

//in js you can pass any literal
//higher order function : function as param
function sayGreet(greet) {
    greet()
}
sayGreet(function () {
    console.log('hello')
})
//parameters and arg in the hof
function sayHello(hello) {
    hello('subramanian')
}
//passing funcition ; inline
sayHello(function (name = '') {
    console.log(`hello ${name}`)
})
let hello = function (name = '') {
    console.log(`hello ${name}`)
};
sayHello(function (name = '') {
    console.log(`hello ${name}`)
})
sayHello(hello)
///////////////

// function login(username, password, success, failure) {
//     //logic
//     if (username === 'admin' && password === 'admin') {
//         success('login success')
//     } else {
//         failure('login failed')
//     }
// }

const login = function (username, password, success, failure) {
    //logic
    if (username === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}
login('admin', 'admin', function (status) {
    console.log(status)
}, function (error) {
    console.log(error)
})
login('foo', 'foo', function (status) {
    console.log(status)
}, function (error) {
    console.log(error)
})