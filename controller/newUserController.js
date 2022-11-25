//const mysql=require('../configuration/dbConfiguration')
const pool = need('pool');
const db=require('../service/baseService')
const mongodb=need('mongo')


class users{
   

    signUp=async(req,res)=>{
        try{
        var message="field is missing"
        const {Name,emailAddress,password,isAdmin,isEmployee,isSuper}=req.body
        var check=(await db.loginverify())
        for(let i=0;i<check.length;i++){
            if(emailAddress===check[i].email){
                message="email id already registered"
                throw err;
            }
        }
        var result=(await db.createUser(Name,emailAddress,password,isEmployee,isSuper,isAdmin))
        res.send({status:"account created successfully",statusCode:200})
        }
        catch(err){
             res.send({message:message,error:err})   
        }
        
    }

    

}

module.exports=new users();