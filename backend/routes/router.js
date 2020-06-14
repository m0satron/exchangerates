const login = require("./login")
const home = (req, res) => res.send("Please login");



const routes = {
  "GET /": home,
  "POST /login": login,
};

module.exports = routes;
