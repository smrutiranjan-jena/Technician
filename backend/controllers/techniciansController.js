const Technician = require('../models/technicianModel')
const technicianCltr = {}
technicianCltr.createOwnDetails = async (req, res) => {
    const body = req.body
    const technician = new Technician(body)
    technician.userId = req.user.id
    try {
        const technicianDoc = await technician.save()
        res.json(technicianDoc)
    } catch (err) {
        res.json(err)
    }
}

technicianCltr.getOwnDetails = async (req, res) => {
    const id = req.params.id
    try {
        const technicianDoc = await Technician.findOne({ _id: id, userId: req.user.id })
        res.json(technicianDoc)
    } catch (err) {
        res.json(err)
    }
}

technicianCltr.updateOwnDetails = async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        const technicianDoc = await Technician.findOneAndUpdate({ _id: id, userId: req.user.id }, body, { new: true, runValidators: true })
        res.json(technicianDoc)
    } catch (err) {
        res.json(err)
    }

}

technicianCltr.getAllTechDetails = async (req, res) => {
    try {
        const technicianDoc = await Technician.find()
        res.json(technicianDoc)
    } catch (err) {
        res.json(err)
    }
}

technicianCltr.getSingleDetails = async (req, res) => {
    const id = req.params.id
    try {
        const technicianDoc = await Technician.findById(id)
        res.json(technicianDoc)
    } catch (err) {
        res.json(err)
    }
}
module.exports = technicianCltr