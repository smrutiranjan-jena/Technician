const User = require('../models/userModel')
const pick = require('lodash/pick')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userCltr = {}
userCltr.register = async (req, res) => {
    const body = pick(req.body, ["username", "email", "password", "role"])
    const user = new User(body)
    try {
        const userCount = await User.countDocuments()
        if (userCount === 0) {
            user.role = 'admin'
        }
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(user.password, salt)
        user.password = hashedPassword
        const userDoc = await user.save()
        res.status(200).json({ message: "user registered successfully" })
    } catch (err) {
        res.status(400).json({ message: "registration failed" })
    }


    //     bcrypt.genSalt()
    //         .then((salt) => {
    //             bcrypt.hash(user.password, salt)
    //                 .then((hashedPassword) => {
    //                     user.password = hashedPassword
    //                     user.save()
    //                         .then((userDoc) => {
    //                             // res.json(userDoc)
    //                             res.status(200).json({ message: "user registered successfully" })
    //                         })
    //                         .catch((err) => {
    //                             // res.json(err)
    //                             res.status(400).json({ message: "registration failed" })
    //                         })
    //                 })
    //         })
    // }
}
userCltr.login = async (req, res) => {
    const body = pick(req.body, ["username", "password"])
    try {
        const userDoc = await User.findOne({ username: body.username })
        if (userDoc) {
            const result = await bcrypt.compare(body.password, userDoc.password)
            if (result) {
                const tokenData = {
                    id: userDoc._id,
                    role: userDoc.role
                }
                const token = jwt.sign(tokenData, "smrutilasya")
                res.json({ token: `Bearer ${token}` })
            }
        } else {
            res.status(401).json({ message: "invalid username/password" })
        }
    } catch (err) {
        res.json(err)
    }
    // User.findOne({ username: body.username })
    //     .then((userDoc) => {
    //         if (userDoc) {
    //             bcrypt.compare(body.password, userDoc.password)
    //                 .then((result) => {
    //                     if (result) {
    //                         // res.status(200).json({message:"login successful"})
    //                         const tokenData = {
    //                             id: userDoc._id,
    //                             role: userDoc.role
    //                         }
    //                         const token = jwt.sign(tokenData, "smrutilasya")
    //                         res.json({ token: `Bearer ${token}` })
    //                     } else {
    //                         res.status(401).json({ message: "invalid username/password" })
    //                     }
    //                 })
    //         } else {
    //             res.status(401).json({ message: "invalid username/password" })
    //         }
    //     })
    //     .catch((err) => {
    //         res.json(err)
    //     })

}
userCltr.account = async (req, res) => {
    try {
        const userDoc = await User.findById(req.user.id)
        res.json(pick(userDoc, ["_id", "username", "email"]))
    } catch (err) {
        res.json(err)
    }
}
userCltr.accountUpdate = async (req, res) => {
    const body = req.body
    try {
        const userDoc = await User.findByIdAndUpdate(req.user.id, body)
        res.status(200).json({ message: "account updated successfully" })
    } catch (err) {
        res.json(err)
    }
}
userCltr.getAllUser = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.json(err)
    }
}
userCltr.removeUser = async (req, res) => {
    const id = req.params.id
    try {
        const userDoc = await User.findByIdAndDelete(id)
        res.json(userDoc)
    } catch (err) {
        res.json(err)
    }
}
module.exports = userCltr