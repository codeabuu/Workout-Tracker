const express = require('express')
const router = express.Router()

//get all workouts
router.get('/', (req, res) => {
  res.json({msg: "GET all workouts"})
})

//get single workout
router.get('/:id', (req, res) => {
  res.json({mssg: "GET a single workout"})
})

//post a new workout
router.post('/', (req, res) => {
  const {title, load, reps} = req.body
  res.json({msg: 'POST new workout'})
})

//delete workout
router.delete('/:id', (req, res) => {
  res.json({msg: 'Delete workout'})
})

router.patch('/:id', (req, res) => {
  res.json({msg: "Update a workout"})
})

module.exports = router
