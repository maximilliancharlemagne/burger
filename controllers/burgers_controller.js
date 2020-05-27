const express = require('express')
const burger = require('../models/burger')

const router = express.Router()

router.use(express.urlencoded(extended=true))
router.use(express.json())

router.get('/burger', (req, res) => {
  res.json(burger.getAll())
})

router.post('/burger',(req, res) => {
  console.log(req.body)
  burger.create(req.body.name)
  res.sendStatus(200)
})

router.put('/burger', (req, res) => {
  burger.devour(req.params.name)
  res.sendStatus(200)
})

module.exports = router