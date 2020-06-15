const JWT = require("jsonwebtoken");

const validateToken = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = JWT.verify(token, process.env.JWT_TOKEN);
    if (!verified) return res.json(false);
    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = validateToken;
