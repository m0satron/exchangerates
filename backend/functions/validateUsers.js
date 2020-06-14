const bcrypt = require("bcryptjs")
const mockUser = require("../users/mockUser")

const userExists = (user) => Object.keys(usersList).includes(userName)

const validateLoginCredentials = async (user, password) => await bcrypt.compare(password, user.password)

module.exports = {
  userExists,
  validateLoginCredentials
}