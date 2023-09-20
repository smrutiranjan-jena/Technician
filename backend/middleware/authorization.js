const authorizeUser=(req,res,next)=>{
    if(req.permittedRoles.includes(req.user.role)){
        next()
    }else{
        res.status(403).json({error:"action denied/you are not authorized to access this route"})
    }
}
module.exports=authorizeUser