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
        enum:['AIR CONDITIONER','WASHING MACHINE','TELEVISION','MICROWAVE OVEN','COOLER','REFRIGERATOR','GRINDER'],
        required:true
    },
    city:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    availability:{
        type:Boolean,
        default:true,
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