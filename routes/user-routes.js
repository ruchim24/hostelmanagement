const express = require('express');
const { check } = require('express-validator');
const checkAuth = require('../middleware/check-auth');
const userController = require('../controllers/user-controller');
const Student = require('../models/student');

const router = express.Router();

router.post('/registration',userController.storeData);


router.post('/login',userController.login);

// router.use(checkAuth);


module.exports = router;