let x = "10"; //string
let y = 10; //number
let c = x * y; // x is converted into number and computation takes place
console.log(`C ${c}`)

let d = parseFloat(x) * y;
console.log(`D ${d}`)

let a = "$10"; 
let b = 100;
let res = a * b; //fails to convert a into number because some special character
console.log(`res ${res}`)
