const mockUser = require("../users/mockUser");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password)
      return res.status(400).json("Not all fields have been entered");

    const usersList = await mockUser;
    const isValidUser = Object.keys(usersList).includes(userName);
    const user = usersList[userName];

    if (!isValidUser)
      return res
        .status(400)
        .json({ msg: `no user registered with name ${userName}` });

    return res.json({
      user: {
        name: user.name,
        id: user._id,
      },
    });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

module.exports = login;
