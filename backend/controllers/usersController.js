const User = require('../models/userModel')
const pick = require('lodash/pick')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userCltr = {}
userCltr.register = (req, res) => {
    const body = pick(req.body, ["username", "email", "password", "role"])
    const user = new User(body)
    User.countDocuments()
        .then((userCount)=>{
            if(userCount===0){
                user.role='admin'
            }
        })
    bcrypt.genSalt()
        .then((salt) => {
            bcrypt.hash(user.password, salt)
                .then((hashedPassword) => {
                    user.password = hashedPassword
                    user.save()
                        .then((userDoc) => {
                            // res.json(userDoc)
                            res.status(200).json({ message: "user registered successfully" })
                        })
                        .catch((err) => {
                            // res.json(err)
                            res.status(400).json({ message: "registration failed" })
                        })
                })
        })
}
userCltr.login = (req, res) => {
    const body = pick(req.body, ["username", "password"])
    User.findOne({ username: body.username })
        .then((userDoc) => {
            if (userDoc) {
                bcrypt.compare(body.password, userDoc.password)
                    .then((result) => {
                        if (result) {
                            // res.status(200).json({message:"login successful"})
                            const tokenData = {
                                id: userDoc._id,
                                role:userDoc.role
                            }
                            const token = jwt.sign(tokenData, "smrutilasya")
                            res.json({ token: `Bearer ${token}` })
                        } else {
                            res.status(401).json({ message: "invalid username/password" })
                        }
                    })
            } else {
                res.status(401).json({ message: "invalid username/password" })
            }
        })
        .catch((err) => {
            res.json(err)
        })

}
userCltr.account = (req, res) => {
    User.findById(req.user.id)
        .then((userDoc) => {
            res.json(pick(userDoc, ["_id", "username", "email"]))
        })
        .catch((err) => {
            res.json(err)
        })
}
userCltr.accountUpdate = (req, res) => {
    const body=req.body
    User.findByIdAndUpdate(req.user.id,body)
        .then(() => {
            res.status(200).json({message:"account updated successfully"})
        })
        .catch((err) => {
            res.json(err)
        })
}
userCltr.getAllUser=(req,res)=>{
    User.find()
        .then((users)=>{
            res.json(users)
        })
        .catch((err)=>{
            res.json(err)
        })
}
userCltr.removeUser=(req,res)=>{
    const id=req.params.id
    User.findByIdAndDelete(id)
        .then((userDoc)=>{
            res.json(userDoc)
        })
        .catch((err)=>{
            res.json(err)
        })
}
module.exports = userCltr