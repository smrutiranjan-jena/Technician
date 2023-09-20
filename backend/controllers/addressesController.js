const Address = require('../models/addressModel')
const addressCltr = {}
addressCltr.getAllUserAddress = async (req, res) => {
    try {
        const addressDoc = await Address.find()
        res.json(addressDoc)
    } catch (err) {
        res.json(err)
    }
}
addressCltr.createOwnAddress = async (req, res) => {
    const body = req.body
    const address = new Address(body)
    address.userId = req.user.id
    try {
        const addressDoc = await address.save()
        res.json(addressDoc)
    } catch (err) {
        res.json(err)
    }
}
addressCltr.getOwnAddress = async (req, res) => {
    const id = req.params.id
    try {
        const addressDoc = await Address.findOne({ _id: id, userId: req.user.id })
        res.json(addressDoc)
    } catch (err) {
        res.json(err)
    }
}
addressCltr.updateOwnAddress = async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        const addressDoc = await Address.findOneAndUpdate({ _id: id, userId: req.user.id }, body, { new: true, runValidators: true })
        res.json(addressDoc)
    } catch (err) {
        res.json(err)
    }
}

module.exports = addressCltr