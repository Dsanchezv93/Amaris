const api = require('express')()
const controller = require('../controllers/numers')
const validator = require('../validators/numers')

api
  .route('/:number')
  .get(validator.all, controller.all)


api
  .route('/')
  .get(controller.hello)

module.exports = api
