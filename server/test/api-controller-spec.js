/* global , it, describe */
import request from 'supertest'
import app from '../../index.js'
let should = require('chai').should()
let supertest = request(app)
import validData from './valid-data'

describe('Payload', () => {
  it('should successfuly return data back with 200 status code', (done) => {
    supertest
      .post('/')
      .send(validData)
      .expect(200)
      .end( (err, res) => {
        res.status.should.equal(200)
        res.text.should.equal('{"response":[{"image":"http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg","slug":"show/16kidsandcounting","title":"16 Kids and Counting"},{"image":"http://mybeautifulcatchupservice.com/img/shows/TheTaste1280.jpg","slug":"show/thetaste","title":"The Taste"},{"image":"http://mybeautifulcatchupservice.com/img/shows/Thunderbirds_1280.jpg","slug":"show/thunderbirds","title":"Thunderbirds"},{"image":"http://mybeautifulcatchupservice.com/img/shows/ScoobyDoo1280.jpg","slug":"show/scoobydoomysteryincorporated","title":"Scooby-Doo! Mystery Incorporated"},{"image":"http://mybeautifulcatchupservice.com/img/shows/ToyHunter1280.jpg","slug":"show/toyhunter","title":"Toy Hunter"},{"image":"http://mybeautifulcatchupservice.com/img/shows/Worlds1280.jpg","slug":"show/worlds","title":"World\'s..."},{"image":"http://mybeautifulcatchupservice.com/img/shows/TheOriginals1280.jpg","slug":"show/theoriginals","title":"The Originals"}]}')
        done()
      })
  })

  it('should throw json parse error with 400 status code', (done) => {
    supertest
      .post('/')
      .send('{"invalid"}')
      .expect(400)
      .type('json')
      .expect('Content-Type', /json/)
      .end( (err, res) => {
        res.text.should.equal('{"error":"Could not decode request: JSON parsing failed"}')
        done()
      })
  })
})
