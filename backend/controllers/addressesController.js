const Address = require('../models/addressModel')
const addressCltr = {}
addressCltr.getAllUserAddress = (req, res) => {
    Address.find()
        .then((addressDoc) => {
            res.json(addressDoc)
        })
        .catch((err) => {
            res.json(err)
        })
}
addressCltr.createOwnAddress = (req, res) => {
    const body = req.body
    const address = new Address(body)
    address.userId = req.user.id
    address.save()
        .then((addressDoc) => {
            res.json(addressDoc)
        })
        .catch((err) => {
            res.json(err)
        })
}
addressCltr.getOwnAddress = (req, res) => {
    const id = req.params.id
    Address.findOne({ _id: id, userId: req.user.id })
        .then((addressDoc) => {
            res.json(addressDoc)
        })
        .catch((err) => {
            res.json(err)
        })
}
addressCltr.updateOwnAddress = (req, res) => {
    const id = req.params.id
    const body = req.body
    Address.findOneAndUpdate({ _id: id, userId: req.user.id }, body, { new: true, runValidators: true })
        .then((addressDoc) => {
            res.json(addressDoc)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = addressCltr