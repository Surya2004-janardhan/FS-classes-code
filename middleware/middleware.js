const jwt = require('jsonwebtoken')


const jwt_secret = "sijs";

export const middleware = (req,res,next) =>{

    const tokendata = req.headers['authorization']
    // bearer "isfjnsingisfngfns"
    if(!token) {
        return res.status(401)
    }
    const token = tokendata.split(" ")[1];

    // token = isjgkgkdklmd
    // secret 123
    // {email : aditya@gmail.com}
    // error 
    jwt.verify(token, jwt_secret , (err,userdata ) =>{
        if(err) {
            return res.send("errpr")
        }
        req.userdata = userdata 
        next() 

    })


}