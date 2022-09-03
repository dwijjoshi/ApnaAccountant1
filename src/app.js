const express = require("express");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const dotenv = require("dotenv");

const app = express();

const logger = (req, res, next) => {
  console.log("log");
  next();
};

app.use(logger);

const userRoute = require("./routes/users/usersRoute");

dotenv.config();

//Connect Database
dbConnect();

//middlewares
app.use(express.json());
//routes
app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
