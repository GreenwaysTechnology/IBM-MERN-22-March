//pure functions
//pure function or not

function getMessage(message) {
    return message;
}
console.log(getMessage('hello'))

//impure function
function calculate(a) {
    //local variable
    let b = 100;
    return a * b;  //arg * localvariable ; => side effect
}