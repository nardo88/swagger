import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routers/books.js'
import constants from './constants/index.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/book', router)

const start = async () => {
    try {
        await mongoose.connect(constants.mongoUrl, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        app.listen('5000', () => {
            console.log('server started...')
        })

    } catch (e) {
        console.log(e)
    }
}

start()