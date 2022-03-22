//message is called arg
function sayHello(message) {
    console.log(message)
}
//Hello is parameter
sayHello('Hello')
sayHello(); //undefined

//es 6 default args 
function multiply(a = 0, b = 0) {
    let c = a * b;
    console.log(`C value ${c}`)
}
multiply(10, 10)
multiply();

//var args ... (rest operator)
function  log(...message){
    console.log(message)
}
log('app')
log('app', 'error')
log('app', 'error', 'in myfile.txt')

function getA() {
    return 10; // return hardcoded value
}
let value = getA()
console.log(value);
console.log(getA())

function getB() {
    let b = 10;
    return b; // return variable
}
console.log(getB());

function calculate(a = 1, b = 1) {
    return a * b; // return expression- computed value
}
console.log(calculate(4, 5))

function isValid() {
    return; // undefined
}
console.log(isValid() ? 'valid' : 'invalid')