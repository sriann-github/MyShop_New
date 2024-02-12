import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const getProducts = asyncHandler(async (req, res) => {
    // No condition to return all the products  
  const products = await Product.find({})
  res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  console.log(req)

  if(product){
  return res.json(product)
}else{
  res.status(404).json({message: 'Product not found'})
}}
)

export {getProducts, getProductById}