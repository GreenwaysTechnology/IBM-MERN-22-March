//nested callback : output of one callback will input to another callback.

//return user data 
const getUser = (success, failure) => {
    let user = {
        id: 1,
        name: 'admin'
    }
    let error = {
        message: 'user not found'
    }
    // user = null;
    if (user) {
        setTimeout(() => {
            success(user)
        }, 1000)
    } else {
        setTimeout(() => {
            failure(error)
        }, 1000)
    }
}

const login = (user, success, failure) => {
    let error = {
        message: 'login failed'
    }
    // user = null;
    if (user.name === 'admin') {
        setTimeout(() => {
            success('login success')
        }, 1000)
    } else {
        setTimeout(() => {
            failure(error)
        }, 1000)
    }
}

const showDashboard = (status, success, failure) => {
    let adminpage = 'Admin Page'
    let guestpage = 'Guest Page'

    if (status === 'login success') {
        setTimeout(success, 1000, adminpage);
    } else {
        setTimeout(failure, 1000, guestpage);
    }

}


getUser(user => {
    console.log(user)
    login(user, status => {
        console.log(status)
        showDashboard(status, adminPage => {
            console.log(adminPage)
        }, error => {
            console.log(error)
        })
    }, error => {
        console.log(error)
    })
}, err => {
    console.log(err)
})