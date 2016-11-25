import express from 'express'
import routes from './server/routes/routes'
import bodyParser from 'body-parser'
import isJSON from 'is-json'
import _ from 'lodash'

const PORT = 8080

let app = express()

app.use(bodyParser.json())

app.use (function (error, request, response, next){
    const errorObject = {"error": "Could not decode request: JSON parsing failed"}
    if(error) {
      response.setHeader("Content-Type", "application/json")
      response.status(400).send({"error": "Could not decode request: JSON parsing failed"})
      response.end()
     }
     else{
      next()
     }
  })


// Api Routes
app.use('/', routes)

app.listen(process.env.PORT || 5000)

console.log('App Started Listening on Port', process.env.PORT || 5000)

module.exports = app
