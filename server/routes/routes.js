import express from 'express'
import ApiController from '../api/api-controller'

let router = express.Router()


router.route('')
      .post(ApiController.payload)

export default router
