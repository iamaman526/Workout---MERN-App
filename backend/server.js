require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

app.use(express.json())
// middleware

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// routes

app.use("/api/workouts", workoutRoutes);

// connect to db

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
console.log('connected to database')

    // listen for requests
    app.listen(process.env.PORT, () => {
      
    });
  })
  .catch((error) => {
    console.log(error);
  });
