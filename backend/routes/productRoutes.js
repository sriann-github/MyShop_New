import express from 'express'
import { getProducts, getProductById } from '../controllers/productController.js'

const router = express.Router()

// We need asyncHandler b'cos express doesn't know how to handle the async calls
// @desc Fetch all products
// @route GET /api/products
// @access public
router.get('/', getProducts)

// @desc Fetch Single product by id
// @route GET /api/products/:id
// @access public
router.get('/:id', getProductById)

export default router

