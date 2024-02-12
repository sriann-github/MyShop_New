import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

// We need asyncHandler b'cos express doesn't know how to handle the async calls
router.get('/', asyncHandler(async (req, res) => {
  // No condition to return all the products
  
  const products = await Product.find({})
  res.json(products)
}))

router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  console.log(req)

  if(product){
  return res.json(product)
}else{
  res.status(404).json({message: 'Product not found'})
}}
))

export default router

