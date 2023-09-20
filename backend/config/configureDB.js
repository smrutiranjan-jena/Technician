const mongoose = require('mongoose')
const configureDB = async () => {
    try {
        const result = await mongoose.connect('mongodb://127.0.0.1:27017/Technician')
        console.log("connected to db")
    } catch (err) {
        console.log(err)
        console.log("error while connecting to db")
    }

}
module.exports = configureDB