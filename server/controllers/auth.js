const { default: mongoose } = require('mongoose')
const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')

const register = async (req, res, next) => {
  const { username, email, password, uuid } = req.body

  try {
    const user = await User.create({ username, email, password, uuid})

    const token = user.getSignedToken()
    
    res.status(201).json({ success: true, token, uuid })   
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
     return next(new ErrorResponse('Please provide email and password', 400))
  }

  try {
     const user = await User.findOne({ email }).select('+password')

     if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401))
     }

     const isMatch = await user.matchPasswords(password)

     if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401))
     }

     const token = user.getSignedToken()
     const uuid = user.uuid;
     res.status(200).json({ success: true, token, uuid })
  } catch (error) {
     next(error)
  }
}

module.exports = {
    register,
    login,
}
