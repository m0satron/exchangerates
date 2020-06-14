const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/router");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.use((req, res) => {
  const route = `${req.method} ${req.url}`;
  const handler = routes[route];

  if (handler) handler(req, res);
  if (!handler) res.end()


});
app.listen(PORT, () => console.log(`server running on port: ${PORT}...`));
