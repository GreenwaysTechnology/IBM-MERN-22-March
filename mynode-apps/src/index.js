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


// getUser()
//     .then(user => login(user))
//     .then(status => showDashboard(status))
//     .then(page=>console.log(page))
//     .catch(err => console.log(err))

async function main() {
    //call promise
    try {
        const user = await getUser();
        const status = await login(user);
        const page = await showDashboard(status)
        console.log(page)
    }
    catch (err) {
        console.log(err);
    }
}
main();