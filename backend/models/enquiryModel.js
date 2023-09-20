const mongoose=require('mongoose')
const Schema=mongoose.Schema
const enquirySchema=new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    technicianId:{
        type: Schema.Types.ObjectId,
        ref: 'Technician',
        required: true
    },
    addressId:{
        type: Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    description:{
        type:String,
        required:true
    },
    images:{
        type:Array
    },
    status:{
        type:Boolean,
        default:false,
        required:true
    }

},{timestamps:true})




const Enquiry=mongoose.model('Enquiry',enquirySchema)
module.exports=Enquiry