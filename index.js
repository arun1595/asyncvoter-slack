require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 4390

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./async-voter')(app)

app.listen(PORT, () => {
  console.log("Listening on port " + PORT)
})