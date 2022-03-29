
class MessageService {

    //api - sync -  
    //  getMessage() {
    //     const message = {
    //         id: 1,
    //         message: 'ping',
    //         author: 'admin'
    //     };
    //     return message;
    // }
    //async callback 
    // getMessage(callback) {
    //     setTimeout(() => {
    //         const message = {
    //             id: 1,
    //             message: 'ping',
    //             author: 'admin'
    //         };
    //         callback(message);
    //     }, 1000)
    // }
    //promise
    getMessage() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const message = {
                    id: 1,
                    message: 'ping',
                    author: 'admin'
                };
                resolve(message);
            }, 1000)
        })
    }
}

module.exports = new MessageService()