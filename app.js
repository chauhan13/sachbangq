const express=require("express");
const app=express();
const bodyParser = require('body-parser');
const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017"
const connection=new MongoClient(url)
const session=require('express-session')
const dotenv = require('dotenv');
dotenv.config();
app.use(session({
  secret:"data",
  resave:false,
  saveUninitialized:false
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mysql=require('./configuration/dbConfiguration')


const globalVariable = {};
global.need = (name, value) => {
  if (value !== undefined) {
    if (globalVariable[name]) {
    } else {
      globalVariable[name] = value;
    }
  }
  if (globalVariable[name]) {
    return globalVariable[name];
  }
  return null;
};

async function init(app){
    let pool = mysql.getPool()
    need('pool', pool);
    let data= await connection.connect();
    let mongo=data.db("courseManagement")
    need('mongo',mongo);
}

init(app).then(()=>{
app.use(require('./router/index'));

})




app.listen(process.env.PORT , function(){
    console.log("listining to port 3000")
})


module.exports=app;