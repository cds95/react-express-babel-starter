import express from 'express'

let userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send({
        message: 'Hello World'
    })
})

export default userRouter