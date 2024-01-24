const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }	
}, {timestamps: true}
)

//create model based on this schema
const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
Workout.find()
