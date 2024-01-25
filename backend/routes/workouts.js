const express = require('express')
const Workout = require('../models/workout')
const router = express.Router()
const {
  createWorkout,
  getSworkout,
  getWorkout
  
} = require('../controllers/workoutCont')

//get all workouts
router.get('/', getWorkout)

//get single workout
router.get('/:id', getSworkout)

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
