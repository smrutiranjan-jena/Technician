const Enquiry= require("../models/enquiryModel")

const enquiryCltr = {}
enquiryCltr.createEnquiry= async (req, res) => {
    const body = req.body
    const enquiry= new Enquiry(body)
    enquiry.userId = req.user.id
    try {
        const enquiryDoc = await enquiry.save()
        res.json(enquiryDoc)
    } catch (e) {
        res.json(e)
    }
}
enquiryCltr.getAllEnquiries= async (req, res) => {
    try {
        const enquriesTotal = await Enquiry.find()
        res.json(enquriesTotal)
    } catch (e) {
        res.json(e)
    }
}
enquiryCltr.getSingleEnquiry= async (req, res) => {
    const id=req.params.id
    try {
        const enquiryDoc = await Enquiry.findById(id)
        res.json(enquiryDoc)
    } catch (e) {
        res.json(e)
    }
}
enquiryCltr.editSingleEnquiry= async (req, res) => {
    const id=req.params.id
    const body=req.body
    try {
        const enquiryDoc = await Enquiry.findByIdAndUpdate(id,body,{unique:true,runValidators:true})
        res.json(enquiryDoc)
    } catch (e) {
        res.json(e)
    }
}
enquiryCltr.getEnquriesByUser = async (req, res) => {
    const userId=req.params.userId
    try {
        const enquriesTotal = await Enquiry.find({userId:userId})
        res.json(enquriesTotal)
    } catch (e) {
        res.json(e)
    }
}
enquiryCltr.getEnquriesByTechnician = async (req, res) => {
    const technicianId=req.params.userId
    try {
        const enquriesTotal = await Enquiry.find({technicianId:technicianId})
        res.json(enquriesTotal)
    } catch (e) {
        res.json(e)
    }
}
module.exports = enquiryCltr