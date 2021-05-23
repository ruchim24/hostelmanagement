const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/user-controller');
const Student = require('../models/student');

const router = express.Router();


router.post('/registration',userController.storeData);


router.post('/login',userController.login);


module.exports = router;