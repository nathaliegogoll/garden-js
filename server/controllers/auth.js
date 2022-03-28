const User = require('../models/User')
const errorResponse = require('../utils/errorResponse')

const register = async (req, res, next) => {
    const { username, email, password, } = req.body

    try {
      const user = await User.create({ username, email, password})

    } catch (error) {
      next(error)
    }
}

module.exports = {
    register,
}
