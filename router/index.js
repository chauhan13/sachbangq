const router = require('express').Router();
const express=require('express');
const app=express();
 

router.use('/admin',require('./api/admin'));
router.use('/signUp',require('./api/newUser'))
router.use('/employee', require('./api/employee'));
router.use('/superAdmin', require('./api//superAdmin'));
router.use('/signIn',require('./api/employee'))

 
module.exports = router;

