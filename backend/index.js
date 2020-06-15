const express = require("express");
const cors = require("cors");
const router = require("./src/routes/router");
require("dotenv").config();

const startPage = require("./src/routes/startPage");
const login = require("./src/routes/login");
const routes = require("./src/routes/router");

const JWT = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.get("/", startPage);
app.use("/login", login);
app.use("/home", router);

app.listen(PORT, () => console.log(`server running on port: ${PORT}...`));
