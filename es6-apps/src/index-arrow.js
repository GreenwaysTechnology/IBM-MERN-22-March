
//es 5 
let hello = function () {
    console.log('hello')
}
hello();

//arrow function:
let hai = () => {
    //function body 
    console.log('hai arrow')
};
hai();
//how to reduce code as much as possible.
//if function body has only one line of code : can remove {}
hai = () => console.log('hai arrow');
hai();

//params and args
let add = (a = 1, b = 1) => {
    let c = a + b;
    console.log(c)
}
add(1, 2);

//return
let multiply = (a = 1, b = 1) => {
    return a * b;
}
console.log(multiply(1, 2));

//if only return statement, we can remove {} and return statement

multiply = (a = 1, b = 1) => a * b
console.log(multiply(1, 2));


function sayGreet(greet) {
    greet()
}
sayGreet(() => console.log('hello'))

const login = (username, password, success, failure) => {
    //logic
    if (username === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}
//if arg has no default value, and its single arg, we can remove ()
login('admin', 'admin', status => console.log(status), error => console.log(error))