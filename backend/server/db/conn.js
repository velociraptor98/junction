const mongoose = require('mongoose');

const connectDatabase = () => {
  console.log("MONGO_DB_URL: " + process.env.MONGO_DB_URL);  
  mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
      console.log("Mongoose Connected");

  }).catch((error) => {
      console.log(error);
  });
}

module.exports = connectDatabase;