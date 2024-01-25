const express = require('express')
const Workout = require('../models/workout')
const router = express.Router()
const {
  createWorkout,
  getSworkout,
  getWorkout,
  deleteWorkout,
  updateWorkout
  
} = require('../controllers/workoutCont')

//get all workouts
router.get('/', getWorkout)

//get single workout
router.get('/:id', getSworkout)

//post a new workout
router.post('/', createWorkout)

//delete workout
router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router
