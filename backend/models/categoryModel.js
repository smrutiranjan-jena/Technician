const mongoose=require('mongoose')
const Schema=mongoose.Schema
const categorySchema=new Schema({
    title:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    mainServices:{
        type:Array,
        required:true
    },
    subServices:{
        type:Array,
        required:true
    }

})




const Category=mongoose.model('Category',categorySchema)
module.exports=Category