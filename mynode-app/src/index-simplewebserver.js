//how to build simple web server 
const http = require('http');

//create webserver
const app = (req,res) => {
   res.write('Hello,Node');
   //close the connection
   res.end();
}
//deploy the app on container
const server = http.createServer(app);

//start the server
server.listen(3000,()=>{
    console.log(`Server is listening @ ${server.address().port}`)
});