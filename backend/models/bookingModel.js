const mongoose = require('mongoose')
const Technician=require('../models/technicianModel')
const Schema = mongoose.Schema
const bookingSchema = new Schema({
    orderId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    technicianName: {
        type: String,
        required: true
    },
    mobile:{
       type:Number,
       required:true
    },
    experience: {
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    serviceType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    bookingStatus: {
        type: String,
        enum: ['pending', 'confirmed','cancelled'],
        default: 'pending',
        required: true
    },
    reachingDate:{
       type:Date
    },userId: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    technicianId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Technician",
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'successful', 'failed'],
        required: true
    },
})
const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking