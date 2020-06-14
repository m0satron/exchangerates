const bcrypt = require("bcryptjs");
const mockUser = require("../users/mockUser");

const userExists = (userName, usersList) =>
  Object.keys(usersList).includes(userName);

const passwordCheck = async (password, user) =>
  await bcrypt.compare(password, user.password);

const validateUsers = async (userName, password) => {
  const usersList = await mockUser;
  if (!userExists(userName, usersList)) return false;
  const user = usersList[userName];
  const isMatch = await passwordCheck(password, user);
  if (!isMatch) return false;
  return user;
};

module.exports = validateUsers;
