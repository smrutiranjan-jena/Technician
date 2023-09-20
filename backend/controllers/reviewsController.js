const Review = require("../models/reviewModel")

const reviewCltr = {}
reviewCltr.createReview = async (req, res) => {
    const body = req.body
    const review = new Review(body)
    review.userId = req.user.id
    try {
        const reviewDoc = await review.save()
        res.json(reviewDoc)
    } catch (e) {
        res.json(e)
    }
}
reviewCltr.getAllReviews = async (req, res) => {
    try {
        const reviewsTotal = await Review.find()
        res.json(reviewsTotal)
    } catch (e) {
        res.json(e)
    }
}
reviewCltr.getSingleReview = async (req, res) => {
    const id=req.params.id
    try {
        const reviewDoc = await Review.findById(id)
        res.json(reviewDoc)
    } catch (e) {
        res.json(e)
    }
}
reviewCltr.getReviewsByUser = async (req, res) => {
    const userId=req.params.userId
    try {
        const reviewsTotal = await Review.find({userId:userId})
        res.json(reviewsTotal)
    } catch (e) {
        res.json(e)
    }
}
reviewCltr.getReviewsByTechnician = async (req, res) => {
    const technicianId=req.params.userId
    try {
        const reviewsTotal = await Review.find({technicianId:technicianId})
        res.json(reviewsTotal)
    } catch (e) {
        res.json(e)
    }
}
module.exports = reviewCltr