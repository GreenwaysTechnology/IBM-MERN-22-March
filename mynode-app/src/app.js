//how to build simple web server 
const http = require('http');
const { getMessage } = require('./services/MessageService')

//create webserver
const app = async (req, res) => {
    // //http headers
    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // })
    // res.end(JSON.stringify(getMessage()));
    //async 
    // getMessage((message) => {
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     })
    //     res.end(JSON.stringify(message));
    // })
    //async promise 
    // getMessage().then(message => {
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     })
    //     res.end(JSON.stringify(message));
    // }).catch(err=>{
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     })
    //     res.end(JSON.stringify({error:'No message found'}));
    // })

    try {
        const message = await getMessage();
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(message));
    }
    catch (err) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({ error: 'No message found' }));
    }

}
//deploy the app on container
const server = http.createServer(app);

//start the server
server.listen(3000, () => {
    console.log(`Server is listening @ ${server.address().port}`)
});