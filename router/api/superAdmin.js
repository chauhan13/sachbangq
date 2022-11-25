const router = require('express').Router();
const adminController = require('../../controller/superAdminController');


router.post('/ApproveCourse',adminController.approveCourse)



module.exports=router;