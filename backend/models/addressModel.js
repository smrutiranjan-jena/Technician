const mongoose = require('mongoose')
const Schema = mongoose.Schema
const addressSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    doorNo: {
        type: Number,
        required: true
    },
    landmark: {
        type: String
    },
    mobileNo: {
        type: Number,
        required: true,
        unique: true
    },
    altMobileNo: {
        type: Number,
        required: true,
        unique: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

},{timestamps:true})

const Address = mongoose.model('Address', addressSchema)
module.exports = Address