const Technician = require('../models/technicianModel')
const technicianCltr = {}
technicianCltr.createOwnDetails = (req, res) => {
    const body = req.body
    const technician = new Technician(body)
    technician.userId = req.user.id
    technician.save()
        .then((technicianDoc) => {
            res.json(technicianDoc)
        })
        .catch((err) => {
            res.json(err)
        })
}

technicianCltr.getOwnDetails= (req, res) => {
    const id = req.params.id
    Technician.findOne({ _id: id, userId: req.user.id })
        .then((technicianDoc) => {
            res.json(technicianDoc)
        })
        .catch((err) => {
            res.json(err)
        })
}

technicianCltr.updateOwnDetails= (req, res) => {
    const id = req.params.id
    const body = req.body
    Technician.findOneAndUpdate({ _id: id, userId: req.user.id }, body, { new: true, runValidators: true })
        .then((technicianDoc) => {
            res.json(technicianDoc)
        })
        .catch((err) => {
            res.json(err)
        })
}

technicianCltr.getAllTechDetails = (req, res) => {
    Technician.find()
        .then((technicianDoc) => {
            res.json(technicianDoc)
        })
        .catch((err) => {
            res.json(err)
        })
}

technicianCltr.getSingleDetails = (req, res) => {
    const id = req.params.id
    Technician.findById(id)
        .then((technicianDoc) => {
            res.json(technicianDoc)
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports = technicianCltr