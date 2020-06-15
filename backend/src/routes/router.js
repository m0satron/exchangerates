const router = require("express").Router();
const limiter = require("../middleware/rateLimit");
const validateToken = require("./validateToken");
const home = require("./home");
const countries = require("./countries");
const rates = require("./rates");

router.get("/", home);
router.post("/validateToken", validateToken);
router.get("/countries/:country", limiter, countries);
router.get("/rates/:amount/:currencies", limiter, rates);

module.exports = router;
