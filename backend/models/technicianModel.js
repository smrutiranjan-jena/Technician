const mongoose=require('mongoose')
const Schema=mongoose.Schema
const technicianSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        enum:['AIR CONDITIONER','WASHING MACHINE','TELEVISION','MICROWAVE OVEN','COOLER'],
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Technician=mongoose.model('Technician',technicianSchema)
module.exports=Technician