//const mysql=require('../configuration/dbConfiguration')
const pool = need('pool');
const db=require('../service/baseService')
const mongodb=need('mongo')
const jwt=require('jsonwebtoken')


class Employee{
   

    signIn=async(req,res)=>{
        try{
        var message=""
        var token;
        const {emailAddress,password}=req.body
        var employeeData=(await db.loginverify(emailAddress))
        var userid=employeeData[0].userid
        if(employeeData[0].password==password){
            message="successfully logged in "
            token=jwt.sign({userid},'my_secret_key')
        }

        res.json({message:message,token:token,statusCode:200})
        }
        catch(err){
             res.send({message:"Invalid wrong id or password",error:err})   
        }
        
    }

    getCourse=async(req,res)=>{
        var courseData=(await db.getcourseapp())



    }

}

module.exports=new Employee();