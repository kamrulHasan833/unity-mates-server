require("dotenv").config();
const app = require("./src/app");
const http = require("http");
const connectMongodbByMongoose = require("./src/db/connect");
const server = http.createServer(app);
const port = process.env.PORT || 5000;

// listen server and connect to database
const main = async () => {
  await connectMongodbByMongoose();
  server.listen(port, () => {
    console.log(`server is running on port: ${port}....`);
  });
};

main();
