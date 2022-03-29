const express = require('express')

const productRouter = express.Router();

productRouter.get('/list', (req, res) => {
    const products = [{ id: 1, name: 'p1', price: 100 }]
    res.status(200).json(products)
})

productRouter.get('/:id', (req, res) => {
     const id  =  req.params.id
    res.status(200).json({id:id})
})

productRouter.post('/', (req, res) => {
     //read data 
     const product = req.body 
     console.log(product)

    res.status(200).json({message:'save called'})
})
productRouter.put('/', (req, res) => {
    res.status(200).json({message:'update called'})
})
productRouter.delete('/', (req, res) => {
    res.status(200).json({message:'delete called'})
})

module.exports = productRouter;