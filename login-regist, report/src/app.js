/* eslint-disable no-unused-vars */
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.json())

const db = require('./dbConnection')
const routes = require('./routes')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
