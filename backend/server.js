import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'


const app = express()
dotenv.config()
/*Conneting to Mongo db*/
connectDB()

//When a request is submitted from the FE for a list of events, it's read here and a json object is returned as events
app.use('/api/products', productRoutes)
app.use(errorHandler)
app.listen(5000, console.log('Server is running on port 5000'))