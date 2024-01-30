import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
import users from './data/users.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'

dotenv.config()
connectDB()

const importData = async () => {
  //Since the product data is dependant on user data, create user data first.
  //Product.js is the schema 
  //products is the sample data

  try{
    // First delete the existing data, while deleting first delete from product table
    await Product.deleteMany()
    await User.deleteMany()

    var createdUsers = await User.insertMany(users)    

    const adminUser = createdUsers[0]._id  
    const sampleProducts = products.map(product => {
      return {...product, user: adminUser}
    })    
    await Product.insertMany(sampleProducts)

    console.log('Data Imported!')
    process.exit(1)
  }
  catch(error){
    console.error(`Error: ${error.message} `)
    process.exit(1)
  }
}


const destroyData = async () => {
  try{
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed')
    process.exit(1)
  }
  catch(error)
  {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

if(process.argv[2] === '-d'){
  destroyData()    
  }else{
    importData()
  }