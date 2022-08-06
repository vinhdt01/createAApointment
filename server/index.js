const express = require("express");
const bodyParser = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./src/routers/index.js");
const mongoose = require("mongoose");
const app = express();
const URL = process.env.PORT || 5000;
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());

route(app);
mongoose.connect(process.env.URL_MONGOOESE).then(() => {
  console.log("connect to Db successfully");
  app.listen(URL, () => {
    console.log(`listening on ${URL}`);
  });
});
