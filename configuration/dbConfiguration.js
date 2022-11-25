var mysql = require('mysql');



class DbConfiguration {
  
    getPool = () => {
      
        console.log("pool iniitialization");
        var con=mysql.createConnection({
            user:  'sql12579140',
            host:'sql12.freesqldatabase.com',
            password: '1HzmwvhdEa',
            database:'sql12579140',
            port: 3306,
          });
          con.connect(function(){
            console.log("connected")
          }) 
        return con;
      }

    

      
  }
  
  
  
  module.exports = new DbConfiguration();
  


  
 
