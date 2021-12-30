const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const pinRoute = require("./routes/pins");

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log(err));


app.use('/api/pins', pinRoute);

app.listen(8800, () => {
  console.log("Backend server is running");
});
