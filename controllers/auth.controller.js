const authService=require('../services/auth.service')

exports.login=(req,res)=>{
    authService.Login(req.body,(error,result)=>{
        if(error){
            res.send(err)
        }
        res.send(result)
    })
}