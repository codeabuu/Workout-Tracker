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
module.export = mongoose.model('Workout', workoutSchema)

Workout.find()
