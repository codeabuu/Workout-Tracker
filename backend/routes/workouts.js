const express = require('express')
const Workout = require('../models/workout')
const router = express.Router()
const {
  createWorkout,
  
} = require('../controllers/workoutCont')

//get all workouts
router.get('/', (req, res) => {
  res.json({msg: "GET all workouts"})
})

//get single workout
router.get('/:id', (req, res) => {
  res.json({mssg: "GET a single workout"})
})

//post a new workout
router.post('/', createWorkout)

//delete workout
router.delete('/:id', (req, res) => {
  res.json({msg: 'Delete workout'})
})

router.patch('/:id', (req, res) => {
  res.json({msg: "Update a workout"})
})

module.exports = router
