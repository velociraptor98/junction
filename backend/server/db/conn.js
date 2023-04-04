const { MongoClient } = require("mongodb");
const Db = process.env.MONGO_DB_URL || "mongodb+srv://ankitbasare10:3xsJLHI66PaRBzgb@cluster0.dg1qpab.mongodb.net/?retryWrites=true&w=majority";
console.log(Db);
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
  getDb: function () {
    return _db;
  },
};