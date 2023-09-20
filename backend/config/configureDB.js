const mongoose=require('mongoose')
const configureDB=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Technician')
        .then(()=>{
            console.log("connected to db")
        })
        .catch((error)=>{
             console.log(error)
        })
}
module.exports=configureDB