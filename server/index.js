const path = require('path')
const express = require('express')
const mongoose = require('mongoose')

const { httpLogger, errorLogger } = require('./middleware')
const { logger } = require('./util')
const indexRouter = require('./routes/index')
const collectionRouter = require('./routes/collection')

const PORT = process.env.PORT || 8000
const app = express()

// Hot module replacement setup
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.development.config')

  const compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: false
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}

// Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', '.build')))

app.use(httpLogger)

app.use('/', indexRouter)
app.use('/api/collection', collectionRouter)

app.use(errorLogger)

// Starting the server
const server = app.listen(PORT, () => {
  logger.info(`App running on port ${PORT}`)
})

// Connect to the database
mongoose.connect('mongodb://localhost/accumulator', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).catch((err) => {
  logger.error(err.stack)
  server.close()
})
const db = mongoose.connection
db.once('open', () => logger.info('Connected to database'))

module.exports = app
