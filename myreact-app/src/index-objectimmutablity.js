//pure function Rule B:

//impure , which mutates the same object
// function updateProfile(profile,city) {
//       //updated profile
//     profile.city = city
//     return profile;
// }
//patterns to create immutable object
//pattern -1
// function updateProfile(profile, city) {
//     return {
//         id: profile.id,
//         name: profile.name,
//         city: city
//     }
// }
//pattern-2
// function updateProfile(profile, city) {
//     return Object.assign({}, profile, { city: city })
// }

//pattern-3 using spread operator
function updateProfile(profile, city) {
    return { ...profile, city: city }
}


let profile = {
    id: 1,
    name: 'subramanian',
    city: 'chennai'
}
console.log("old Profile ", profile)
let updatedProfile = updateProfile(profile, 'coimbatore')
console.log("updated Profile ", updatedProfile)

console.log("old profile === updatedProfile", profile === updatedProfile)

//arrays and immutablity

//pure or impure
// function addTodo(todos, newTodo) {
//     return todos.push(newTodo)
// }

// function addTodo(todos, newTodo) {
//     return todos.concat(newTodo)
// }
function addTodo(todos, newTodo) {
    return [...todos, newTodo]
}
let todos = [{
    title: 'Learn react',
    done: true
}];
Object.freeze(todos)

console.log(addTodo(todos, { title: 'Learn Pure functions', done: false }))

//other array pure functions;
//map,filter,
