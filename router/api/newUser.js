const router = require('express').Router();
const newController = require('../../controller/newUserController');



router.post('/',newController.signUp)


module.exports=router;