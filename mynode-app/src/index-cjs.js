const { firstName, lastName, skills, status,  greet } = require('./services/util')
const TodoService = require('./services/TodoService')

function main() {
   console.log(firstName,lastName,skills,status,greet())
   let service = new TodoService();
   console.log(service.findAll())
}
main();