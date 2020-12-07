const express = require("express");
const connectDb = require("./src/db/connection");
const routes = require("./src/routes/index.js")
const PORT = 8080;

const app = express();
app.use('/api', routes);

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});