const controller = require('../controllers/utils')
const validate = require('../controllers/utils.validate')
const express = require('express')
const router = express.Router()
const trimRequest = require('trim-request')

/*
 ROUTES
*/
router.post(
  '/sendcontact',
  trimRequest.all,
  validate.sendcontact,
  controller.sendcontact
)

module.exports = router
