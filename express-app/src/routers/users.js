const express = require('express')

const userRouter = express.Router();

userRouter.get('/list', (req, res) => {
    const users = [{ id: 1, name: 'foo'}]
    res.status(200).json(users)
})
userRouter.post('/', (req, res) => {
    
    res.status(200).json({message:'users save called'})
})
userRouter.put('/', (req, res) => {
    res.status(200).json({message:'users update called'})
})
userRouter.delete('/', (req, res) => {
    res.status(200).json({message:'users delete called'})
})
module.exports =userRouter;