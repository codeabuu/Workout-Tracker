const Workout = require("../models/workout")
const mongoose = require("mongoose")

//get all workouts
const getWorkout = async(req, res) => {
  const workouts = await Workout.find({}).sort ({createdAt: -1})

  res.status(200).json(workouts)

}

//get single workout
const getSworkout = async(req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "no such workout"})
  }

  const workout = await Workout.findById(id)
  if (!workout) {
    return res.status(404).json({error: "No such workout"})
  }
  res.status(200).json(workout)
}

//create new workout
const createWorkout = async(req, res) => {
  const {title, load, reps} = req.body
  
  let emptyfield = []
  if (!title) {
    emptyfield.push('title')
  }
  if (!load) {
    emptyfield.push('load')
  }
  if (!reps) {
    emptyfield.push('reps')
  }
  if (emptyfield.length > 0) {
    return res.status(400).json({error: "Please fill in all fields", emptyfield})
  }

//add doc to db
  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch(error) {
    res.status(400).json({error: error.message})

}
}

//delete workout
const deleteWorkout = async(req, res) => {
  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "no such workout"})
  }
  const workout = await Workout.findOneAndDelete({_id: id})
  if (!workout) {
    return res.status(404).json({error: "No such workout"})
  } 
  res.status(200).json(workout)
}

//updates workout
const updateWorkout = async(req, res) => {
  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.d840343121203d8d9status(404).json({error: "no such workout"})
  }
  const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})

  if (!workout) {
    return res.status(404).json({error: "No such workout"})
} 
  res.status(200).json(workout)
}

module.exports = {
  createWorkout,
  getSworkout,
  getWorkout,
  deleteWorkout,
  updateWorkout
}
