const mongoose = require("mongoose");

const getURI = () => {
  let uri;
  uri = process.env.DB_URI;
  uri = uri.replace("<username>", process.env.DB_USER);
  uri = uri.replace("<password>", process.env.DB_PASSWORD);
  return uri;
};
const connectMongodbByMongoose = async () => {
  try {
    console.log("Connecting to database");
    const uri = getURI();
    await mongoose.connect(uri, { dbName: process.env.DB_NAME });
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectMongodbByMongoose;
