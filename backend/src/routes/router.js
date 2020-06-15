// const login = require("./login");
const home = require("./home");
const validateToken = require("./validateToken");

const countries = require("./countries");

const router = require("express").Router();

router.get("/", home)
router.post("/validateToken", validateToken)
router.get("/countries/:country", countries)

module.exports = router;
