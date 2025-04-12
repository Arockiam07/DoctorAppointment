const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const client = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DB connected");
  return mongoose.connection; // Return the connection object
})
.catch((error) => {
  console.error("Error: ", error);
  process.exit(1); // Exit process on connection error
});

module.exports = client;