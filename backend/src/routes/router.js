const login = require("./login")
const home = require("./home.js")
const startPage = (req, res) => res.send("Please login");




const routes = {
  "GET /": startPage,
  "POST /login": login,
};

module.exports = routes;
