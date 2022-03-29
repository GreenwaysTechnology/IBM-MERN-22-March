const express = require('express')

//create app object 
const app = express();

//REST API 
// HTTP Verb  - URL (GET  /api/products/list)

app.get('/api/products/list', (req, res) => {
    const products = [{ id: 1, name: 'p1', price: 100 }]
    res.status(200).json(products)
})
app.post('/api/products', (req, res) => {
    
    res.status(200).json({message:'save called'})
})
app.put('/api/products', (req, res) => {
    res.status(200).json({message:'update called'})
})
app.delete('/api/products', (req, res) => {
    res.status(200).json({message:'delete called'})
})

app.get('/api/users/list', (req, res) => {
    const users = [{ id: 1, name: 'foo'}]
    res.status(200).json(users)
})
app.post('/api/users', (req, res) => {
    
    res.status(200).json({message:'users save called'})
})
app.put('/api/users', (req, res) => {
    res.status(200).json({message:'users update called'})
})
app.delete('/api/users', (req, res) => {
    res.status(200).json({message:'users delete called'})
})
//server start
app.listen(3000, () => {
    console.log('Express Server is Running')
})