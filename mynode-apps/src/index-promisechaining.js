//return user data 
const getUser = () => {
    console.log('user is called')
    let user = {
        id: 1,
        name: 'admin'
    }
    let error = {
        message: 'user not found'
    }
    // user = null;
    if (user) {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => resolve(user), 5000)
        })
    } else {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => reject(error), 5000)
        })
    }
}

const login = (user) => {
    console.log('login is called')

    let error = {
        message: 'login failed'
    }
    if (user) {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => resolve('login success'), 5000)
        })
    } else {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => reject(error), 5000)
        })
    }
}

const showDashboard = (status) => {
    console.log('showDashboard is called')
    let adminpage = 'Admin Page'
    let guestpage = 'Guest Page'
    if (status === 'login success') {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => resolve(adminpage), 5000)
        })
    } else {
        return new Promise((resolve, reject) => {
            //async code goes here
            setTimeout(() => reject(guestpage), 5000)
        })
    }

}


// getUser(user => {
//     console.log(user)
//     login(user, status => {
//         console.log(status)
//         showDashboard(status, adminPage => {
//             console.log(adminPage)
//         }, error => {
//             console.log(error)
//         })
//     }, error => {
//         console.log(error)
//     })
// }, err => {
//     console.log(err)
// })

// getUser()
//     .then(user => {
//         return login(user)
//     })
//     .then(status => {
//         return showDashboard(status)
//     })
//     .then(page=>{
//         console.log(page)
//     })
//     .catch(err => console.log(err))

getUser()
    .then(user => login(user))
    .then(status => showDashboard(status))
    .then(page=>console.log(page))
    .catch(err => console.log(err))