const express = require('express');
const { Add } = require('../controllers/payment');
const Router = express.Router();


Router.post('/payment', Add)

module.exports = Router; 

