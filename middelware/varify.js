const jwt = require('jsonwebtoken')

const varify=(req,res,next)=>{

    let token=req.headers.authorization
    console.log(token)
    
    try{
        console.log(token)
        jwt.verify(token, 'dheeraj', function(err, decoded) {
            console.log(decoded)
            req.body.userID=decoded.userID
          })
          next()

    }catch(error)
    {
        res.send({"mas":"pls login first"})

    }

}
module.exports={varify}