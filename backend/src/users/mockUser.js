const bcrypt = require("bcryptjs");

async function encryptedPassword(password) {
  const salt = await bcrypt.genSalt();
  const passWordHash = await bcrypt.hash(password, salt);

  return passWordHash;
}

async function createmockUsers() {
  return {
    user: {
      _id: "12345",
      userName: "user",
      password: await encryptedPassword("password"),
    },
  };
}

module.exports = createmockUsers();
