const express = require('express')
const burger = require('../models/burger')
const path = require('path')

const router = express.Router()

router.use(express.static(path.join(__dirname,'/public')))
router.use(express.urlencoded(extended=true))

router.get('/api/burger', (req, res) => {
  res.json(burger.getAll())
})

router.post('/api/burger',(req, res) => {
  burger.create(req.params.name)
  res.sendStatus(200)
})

router.put('/api/burger', (req, res) => {
  burger.devour(req.params.name)
  res.sendStatus(200)
})

module.exports = router