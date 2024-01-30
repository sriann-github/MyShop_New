import bcrypt from 'bcryptjs'

const users = [
  {
  name: 'Admin user',
  email: 'info@kalacademy.com',
  password: bcrypt.hashSync('123456', 10),
  isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'johnd@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Jane Doe',
    email: 'janed@example.com',
    password: bcrypt.hashSync('234768', 10)
  }
]

export default users