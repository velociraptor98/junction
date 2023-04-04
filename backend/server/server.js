const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: ".env" });
// 3500 fallback port
const port = process.env.PORT || 3500;
app.use(cors());
app.use(express.json());
// get driver connection
const dbo = require("./db/conn");
// DEFINE ROUTES
app.use(require("./routes/event/event"));
app.use(require("./routes/journal/journal"));
app.use(require("./routes/user/user"));
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});