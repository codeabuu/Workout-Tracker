require('dotenv').config()

const express = require('express')

//express app
const app = express()

//middleware,access to req and res
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//route handler
app.get('/', (req, res) => {
  res.json({mssg: "Welcome to the app"})
})

//listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening to port 4000')
})
