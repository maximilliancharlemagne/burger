const express = require('express')
const burger = require('../models/burger')

const router = express.Router()

router.use(express.urlencoded(extended=true))
router.use(express.json())

router.get('/burger', (req, res) => {
  burger.getAll((results) => {
    res.json(results)
  })
})

router.post('/burger',(req, res) => {
  burger.create(req.body.name)
  res.sendStatus(200)
})

router.put('/burger', (req, res) => {
  burger.devour(req.body.name)
  res.sendStatus(200)
})

module.exports = router