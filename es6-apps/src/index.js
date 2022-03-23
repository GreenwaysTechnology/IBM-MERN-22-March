import { firstName, lastName, rating, skills, isActive, calcuate } from './mylib'
import UserService from './services/userservice'


console.log(firstName,lastName,rating,skills,isActive,calcuate())

let user = new UserService()

console.log(user.findAll())