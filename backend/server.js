import express from 'express'
import products from './data/Products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()
dotenv.config()
/*Conneting to Mongo db*/
connectDB()

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/product/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server is running on port 5000'))

