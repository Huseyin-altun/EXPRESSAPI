const express = require('express')

const Products = require('../controllers/product')

const router = express.Router()

router.post('/stocks', Products.createProduct)

router.get('/stocks', Products.getProducts)

module.exports = router