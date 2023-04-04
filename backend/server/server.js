const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// 3500 fallback port
const port = process.env.PORT || 3500;
app.use(cors());
app.use(express.json());
// get driver connection
const connectMongo = require("./db/conn");
// DEFINE ROUTES
app.use(require("./routes/event/event"));
app.use(require("./routes/journal/journal"));
app.use(require("./routes/user/user"));

// connect to mongodb
connectMongo();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});