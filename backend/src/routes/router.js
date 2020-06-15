// const login = require("./login");
const home = require("./home");
const validateToken = require("./validateToken");

const countries = require("./countries");
const rates = require("./rates");

const router = require("express").Router();

router.get("/", home);
router.post("/validateToken", validateToken);
router.get("/countries/:country", countries);
router.get("/rates/:amount/:currencies", rates);

module.exports = router;
