const Booking = require('../models/bookingModel')
const { ObjectId } = require('mongodb');

const bookingCltr = {}
bookingCltr.create = async (req, res) => {
    const body = req.body
    const booking = new Booking(body)
    booking.userId = req.user.id
    booking.technicianId = new ObjectId(body.technicianId);
    try {
        const bookngDoc = await booking.save()
        res.json(bookngDoc)
    } catch (err) {
        res.json(err)
    }
}
bookingCltr.getAllBookingsByOwn = async (req, res) => {
    const id = req.user.id
    try {
        const bookings = await Booking.find({ userId: id })
        res.json(bookings)
        console.log(bookings)
    } catch (err) {
        res.json(err)
    }
}
bookingCltr.getAllBookingsById = async (req, res) => {
    const id = req.params.techId
    try {
        const bookings = await Booking.find({ technicianId: id })
        console.log(bookings)
        res.json(bookings)
    } catch (err) {
        res.json(err)
    }
}
bookingCltr.updateStatus = async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        const bookingDoc = await Booking.findByIdAndUpdate(id, body, { unique: true, runValidator: true })
        res.json(bookingDoc)
    } catch (err) {
        res.json(err)
    }
}
bookingCltr.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
        res.json(bookings)
        console.log(bookings)
    } catch (err) {
        res.json(err)
    }
}
module.exports = bookingCltr
