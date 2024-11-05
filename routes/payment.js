const express = require('express');
const { Add, Verify } = require('../controllers/payment');
const Router = express.Router();


Router.post('/payment', Add)
Router.get("/payment/:id", Verify)

module.exports = Router; 

