import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: {
      type:Number,
      required: true
    },
    rating: {
      type:Number,
      required: true

    },
    Comment: {
      type: String,
      required: true
    }
  }
)
const productSchema = mongoose.Schema(  
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  brand:{
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numOfReviews: {
    type: Number,
    required: true,
    default:0
  },
  CountInStock:{
    type: Number,
    required: true,
    default:0
  },
  reviews: [reviewSchema]
},
{
  timeStamps: true
})

const Product = mongoose.model('products', productSchema)
export default Product