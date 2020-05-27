const express = require('express')
const burger = require('../models/burger')
const path = require('path')

const router = express.Router()

router.use(express.static(path.join(__dirname,'/public')))
router.use(express.urlencoded(extended=true))

router.get('/api/burger', (req, res) => {

})