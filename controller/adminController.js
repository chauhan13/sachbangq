//ES6
const mongodb=need('mongo')
const mongo=require('mongodb')

class adminController{

    newCourse=async(req,res)=>{
        //var {title,description,vedioUrl,topics,duration,category}=req.body
        const newCourse=req.body;
        if(req.body.length===1){
            let mongoresult=await mongodb.collection('Course').insertOne(newCourse[0])
            res.send({message:"New Course Inseerted "})
        }
        else if(req.body.length>1){

            let mongoresult=await mongodb.collection('Course').insertMany(newCourse)
            res.send({message:"multiple course inserted"})

        }
        else{
            res.send({message:"Enter data to create New Course"})
        } 

    }

    updateCourse=async(req,res)=>{
       var {id}=req.body
        var message="Successfully Updated"
       let mongoresult=await mongodb.collection('Course').updateOne({_id:new mongo.ObjectId(id)},{$set:req.body})
       if(mongoresult.modifiedCount===0 && mongoresult.matchedCount>=0){

            message="Same data present in the DB"

       }
       res.send({status:message})


    }

    deleteCourse=async(req,res)=>{
        var id=req.params.id
        var id=req.body
        var message="successfully deleted";
        let mongoresult=await mongodb.collection('Course').deleteOne({_id:new mongo.ObjectId(id)})
        console.log(mongoresult);
        if(mongoresult.deletedCount===0){

            message="Item is Not present In the Database"
        }

        res.send({status:message,body:mongoresult})
        


    }

}

module.exports=new adminController();