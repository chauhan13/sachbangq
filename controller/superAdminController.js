//const mysql=require('../configuration/dbConfiguration')
const pool = need('pool');
const db=require('../service/baseService')
const mongodb=need('mongo')


class superAdminController{
   
        approveCourse=async(req,res)=>{
            try{
            var {courseId,isApproved}=req.body;
            if(req.body){
                var check=(await db.approveCourse(courseId,isApproved));
            }
            res.send({status:"success",body:"this course is Approved for users"})
        }catch(err){
            res.send({status:err})
        }
            
        }

}

module.exports=new superAdminController();