//higher order function : function is value, so we can store into variable,can be passed as parameter, returned from another function.

function add(a = 1, b = 2) {
    return a + b;

}
console.log(add())

//storing the function into variable.
let a = 10;
let adder = add;
console.log(adder(3, 4))
/////////////////////////////////////////////////////////////////////////////////////

//syntax -1
// function add(a = 1, b = 2) {
//     return a + b;

// }
// let adder= add;

//anonmous function
const myadder = function (a = 1, b = 2) {
    return a + b;
};
console.log(myadder());