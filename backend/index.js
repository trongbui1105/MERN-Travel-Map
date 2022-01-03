const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const cors = require('cors');

app.use(cors());

const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log(err));


app.use('/api/pins', pinRoute);
app.use('/api/users', userRoute);

app.listen(8800, () => {
  console.log("Backend server is running");
});
