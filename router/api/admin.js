const router = require('express').Router();
const adminController = require('../../controller/adminController');


router.post('/addCourse',adminController.newCourse)
router.post('/updateCourse',adminController.updateCourse)
router.delete('/deleteCourse',adminController.deleteCourse)


module.exports=router;