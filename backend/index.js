const express = require("express");
const cors = require("cors");
require("dotenv").config();

const router = require("./src/routes/router");
const startPage = require("./src/routes/startPage");
const login = require("./src/routes/login");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", startPage);
app.use("/login", login);
app.use("/home", router);

app.listen(PORT, () => console.log(`server running on port: ${PORT}...`));
