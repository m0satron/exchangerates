const auth = require("../middleware/auth");
const mockUser = require("../users/mockUser");

const home =
  (auth,
  async (req, res) => {
    try {
      const mock = await mockUser;
      res.json({
        userName: mock.user["userName"],
        id: mock.user["_id"],
      });
    } catch (err) {
      res.json({ msg: err.message });
    }
  });

module.exports = home;
