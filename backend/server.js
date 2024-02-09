//loads our .env file with port
require('dotenv').config()

const express = require('express')
const workoutRoute = require('./routes/workouts.js')
const mongoose = require('mongoose') 
const userRoute = require('./routes/user')

//express app
const app = express()

//middleware,access to req and res
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/workouts', workoutRoute)
app.use('/api/user', userRoute)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
     app.listen(process.env.PORT, () => {
       console.log(`listening to port ${process.env.PORT}`)
     })
  })
  .catch((error) => {
     console.log(error)
  })
