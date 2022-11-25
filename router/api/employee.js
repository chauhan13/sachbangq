const router = require('express').Router();
const employeeController = require('../../controller/employeeController');



router.post('/',employeeController.signIn)
router.get('/courselist',employeeController.getCourse)


module.exports=router;