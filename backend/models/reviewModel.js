const mongoose = require('mongoose')
const Schema = mongoose.Schema
const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    technicianId: {
        type: Schema.Types.ObjectId,
        ref: 'Technician',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    }

}, { timestamps: true })
const Review = mongoose.model('Review', reviewSchema)
module.exports=Review