
//function declaration
function sayHello() {
    console.log('Hello')
}
sayHello();
function validate() {
    //logic
    let name = 'ram';
    let password = 'ram';
    let response = (name === 'ram') && (password === 'ram') ? 'valid' : 'invalid'
    console.log(response);
}
validate();