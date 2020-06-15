const limiter = require("../middleware/rateLimit")
const home = require("./home");
const validateToken = require("./validateToken");

const countries = require("./countries");
const rates = require("./rates");

const router = require("express").Router();

router.get("/", home);
router.post("/validateToken", validateToken);
router.get("/countries/:country", limiter, countries);
router.get("/rates/:amount/:currencies", limiter, rates);

module.exports = router;
