const express = require('express')
const router = express.Router()

//get all workouts
router.get('/', (req, res) => {
  res.json({msg: "GET all workouts"})
})

//get single workout
router.get('/:id', (res, req) => {
  res.json({mssg: "GET a single workout"})
})

//post a new workout
router.post('/', (res, req) => {
  res.json({msg: 'POST new workout'})
})

//delete workout
router.delete('/', (res, req) => {
  res.json({msg: 'Delete workout'})
})

module.exports = router
