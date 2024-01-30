

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode).json({message: err.message})
  // you can call next fn here if you need to do anything next
}
export default errorHandler