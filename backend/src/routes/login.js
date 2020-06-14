const validateUsers = require("../functions/validateUsers");
const JWT = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password)
      return res.status(400).json("Not all fields have been entered");

    const user = await validateUsers(userName, password);
    if (!user)
      return res.status(400).json({ msg: "invalid login credentials" });

    const token = JWT.sign({ id: user._id }, process.env.JWT_TOKEN);

    return res.json({
      token,
      user: {
        name: user.userName,
        id: user._id,
      },
    });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

module.exports = login;
