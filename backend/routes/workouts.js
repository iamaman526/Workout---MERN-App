const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });

});

//GET a single workout

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

//POST a new workout

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout({ title, load, reps });
    res.status(200).json(workout);
    workout.save()
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

});

//Delete a new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete a  workout" });
});

//update a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update a  workout" });
});
module.exports = router;
