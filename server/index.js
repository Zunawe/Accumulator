const path = require('path')
const express = require('express')
const mongoose = require('mongoose')

const indexRouter = require('./routes/index')
const contactRouter = require('./routes/contact')

const boot = () => {
  mongoose.connect('mongodb://localhost/accumulator', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  mongoose.connection.once('open', () => console.log('Successfully connected to database'))

  const PORT = 8000
  const app = express()

  app.use(express.json())
  app.use(express.static(path.join(__dirname, '..', '.build')))

  app.use('/', indexRouter)
  app.use('/api/contact', contactRouter)

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
  })
}

module.exports = {
  boot
}
