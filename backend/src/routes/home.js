const home = require("express").Router();
const auth = require("..middleware/auth");


router.get("/", auth, async (req, res) => {
  const mock = await mockUser;
  res.json({
    userName: mock.user['userName'],
    id: mock.user['_id']
  });
})

module.exports = home;