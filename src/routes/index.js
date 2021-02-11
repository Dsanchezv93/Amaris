const express = require('express')
const router = express.Router()

const numers = require('./numers')
const { health } = require('./health')

router.use('/health', health)
router.use('/', numers)

module.exports = router
