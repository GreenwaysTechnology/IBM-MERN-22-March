const fs = require('fs');

const filePath = './src/assets/hello.txt';

const options = {
    encoding: 'UTF-8'
}

function blockMe(message){
    console.log(message)
}

blockMe('start')
//nonblocking api , async file io
fs.readFile(filePath,options,(error,data)=>{
    if (error) throw error;
    console.log(data)
})
blockMe('end')