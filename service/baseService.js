const pool = need('pool');


class baseService{

    loginverify=async(email)=>{

    const result = await new Promise((resolve) => {
        pool.query(`select userid, name,email,password,isemployee,issuperAdmin,isadmin from users where email like '${email}';`, (err, res) => {
            resolve(res)
        })
    })

    return result; 

    }

    createUser=async(Name,email,password,isemployee=1,issuperAdmin=0,isadmin=0)=>{
        const result = await new Promise((resolve) => {
        pool.query(`insert into users(name,email,password,isemployee,issuperAdmin,isadmin) values('${Name}','${email}','${password}',${isemployee},${issuperAdmin},${isadmin});`, (err, res) => {
                if(err) console.log(err)
                else resolve(res)
            })
        })

        return result
        }

    approveCourse=async(courseId,isApproved)=>{
        const result = await new Promise((resolve) => {
            pool.query(`insert into approved_course(courseId,isApproved,onlive) values('${courseId}',${isApproved},1);`, (err, res) => {
                    if(err) console.log(err)
                    else resolve(res)
                })
            })
    
            return result

    }

    getcourseapp=async()=>{

        const result = await new Promise((resolve) => {
            pool.query(`select * from  approved_course where isApproved=1;`, (err, res) => {
                    if(err) console.log(err)
                    else resolve(res)
                })
            })
    
            return result
    }

}

module.exports= new baseService();