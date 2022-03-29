//

function block(message) {
    console.log(message)
}


// const login = (user, password) => {
//     if (user === 'admin' && password == 'admin') {
//         //return promise ;factory pattern of creating project
//         return Promise.resolve('login success')
//     } else {
//         return Promise.reject('login failed')
//     }
// }


const login = (user, password) => {
    if (user === 'admin' && password == 'admin') {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => resolve('login success'), 5000)
        })
    } else {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => reject('login failed'), 5000)
        })
    }
}
block('start')
login('admin', 'admin')
    .then(response => console.log(response))
    .catch(err => console.log(err))
block('end')

