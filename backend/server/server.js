require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
// 3000 fallback port
const port = process.env.PORT || 3000;
const connectMongo = require("./db/conn");
const mongoose = require('mongoose')
// get driver connection
app.use(cors());
app.use(express.json());
connectMongo();
// DEFINE ROUTES
// app.use(require("./routes/event/event"));
// app.use(require("./routes/journal/journal"));
app.use('/users', require('./routes/user/userRoutes'))
app.use('/journals', require('./routes/journal/journalRoutes'))
app.use('/events', require('./routes/event/eventRoutes'))

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  // app.listen(port, () => console.log(`Server running on port ${port}`))
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});