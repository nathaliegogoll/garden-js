const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')

const register = async (req, res, next) => {
  const { username, email, password, } = req.body

    try {
      const user = await User.create({ username, email, password})
1
    } catch (error) {
      next(error)
    }
}

module.exports = {
    register,
    login,
}
