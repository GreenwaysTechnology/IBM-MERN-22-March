const express = require('express')
const productRouter = require('./routers/products');
const userRouter = require('./routers/users')
//import middleware
const bodyParser = require('body-parser');
const morgan = require('morgan')


//create app object 
const app = express();

//Middleware registrations :should be done before any routers
app.use(morgan('combined'))

app.use(bodyParser.json())


//link the routers with app.
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)


//server start
app.listen(3000, () => {
    console.log('Express Server is Running')
})