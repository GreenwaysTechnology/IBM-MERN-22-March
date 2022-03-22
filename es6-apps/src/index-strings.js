//literals demo //variables

//es 5 vs es 6
//strings: "" '' ``
var firstName = "Subramaian"
var lastName = 'Murugan'
//es 5 style of string concation
// var fullName = firstName + lastName  //string concatation

//es 6 back tick notation ``
var fullName = ` Name => ${firstName} ${lastName}`  //string interpolation

console.log(fullName)

//let keyword replaces var in es 6
let city = 'Coimbatore'
let state = "Tamil Nadu"
console.log(`City ${city} State ${state}`)

//multi line strings using es 5 pattern:
let title = 'Google'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)
