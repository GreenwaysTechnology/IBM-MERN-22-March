//withoout object destructuring
// function showEmployee(employee) {
//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`city ${employee.address.city}`)
// }
// function showEmployee(employee) {
//     //destructure the object
//     const { id, name, address: { city } } = employee
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`city ${city}`)
// }
// const showEmployee = (employee) => {
//     const { id, name, address: { city } } = employee
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`city ${city}`)
// }

const showEmployee = ({ id, name, address: { city } }) => {
    // const { id, name, address: { city } } = employee
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`city ${city}`)
}

showEmployee({ id: 1, name: 'subramanian', address: { city: 'coimbatore' } })
/////////////////////////////////////////////////////////////////////////////////////
//How to return object with dynamic values and destructure

// const getStockValue = (symbol = 'google', qty = 0, value = 0) => {
//     return {
//         symbol: 'google',
//         qty: 100,
//         value: 10000
//     }
// }
// const getStockValue = (symbol = 'google', qty = 0, value = 0) => {
//     //destructure
//     //leftside: object instance variable
//     //rightside: local variable
//     //if leftside and rightside is same  symbol:symbol , remove one
//     return {
//         symbol,
//         qty,
//         value
//     }
// }

const getStockValue = (symbol = 'google', qty = 0, value = 0) =>({
        symbol,
        qty,
        value
})

console.log(getStockValue('google', 100, 10000))