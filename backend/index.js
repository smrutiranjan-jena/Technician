const categoryCltr = require('./controllers/categoriesController')
const userCltr = require('./controllers/usersController')
const addressCltr = require('./controllers/addressesController')
const technicianCltr = require('./controllers/techniciansController')
const reviewCltr = require('./controllers/reviewsController')
const enquiryCltr = require('./controllers/enquiriesController')
const authenticateUser = require('./middleware/authentication')
const authorizeUser = require('./middleware/authorization')
const configureDB = require('./config/configureDB')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT
configureDB()

//User routes #####################################################################################################

//>>>>public routes
app.post('/api/users/register', userCltr.register)//user either customer or technician or admin
app.post('/api/users/login', userCltr.login)//user either customer or technician or admin
//>>>>private routes
app.get('/api/users/profile', authenticateUser, userCltr.account)//user either customer or technician or admin
app.put('/api/users/profile', authenticateUser, userCltr.accountUpdate)//user either customer or technician or admin
app.get('/api/users/all', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, userCltr.getAllUser)
app.delete('/api/users/:id', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, userCltr.removeUser)
//Category routes ################################################################################################

app.post('/api/categories', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, categoryCltr.createCategory)
app.get('/api/categories/all', categoryCltr.getAllCategory)
app.put('/api/categories/:categoryid', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, categoryCltr.editCategory)
app.delete('/api/categories/:categoryid', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, categoryCltr.removeCategory)

//Address routes ##################################################################################################

app.post('/api/addresses', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['customer']
    next()
}, authorizeUser, addressCltr.createOwnAddress)
app.get('/api/addresses/:id', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['customer']
    next()
}, authorizeUser, addressCltr.getOwnAddress)
app.put('/api/addresses/:id', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['customer']
    next()
}, authorizeUser, addressCltr.updateOwnAddress)
app.get('/api/addresses/all', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, addressCltr.getAllUserAddress)


// Technician routes ##############################################################################################

app.post('/api/techniciandetails', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['technician']
    next()
}, authorizeUser, technicianCltr.createOwnDetails)
app.get('/api/techniciandetails/own', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['technician']
    next()
}, authorizeUser, technicianCltr.getOwnDetails)
app.put('/api/techniciandetails/:id', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['technician']
    next()
}, authorizeUser, technicianCltr.updateOwnDetails)
app.get('/api/techniciandetails/all', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin', 'customer']
    next()
}, authorizeUser, technicianCltr.getAllTechDetails)
app.get('/api/techniciandetails/:userId', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin', 'customer']
    next()
}, authorizeUser, technicianCltr.getSingleDetails)
app.get('/api/techniciandetails/all/:category/:city', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['customer']
    next()
}, authorizeUser, technicianCltr.getAllTechByCategory)

// reviews routes ##############################################################################################

app.post('/api/reviews', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['customer']
    next()
}, authorizeUser, reviewCltr.createReview)//post a reviews after the completion of service
app.get('/api/reviews/all', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, reviewCltr.getAllReviews)//get whole reviews 
app.get('/api/reviews/:id', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin', 'customer']
    next()
}, reviewCltr.getSingleReview)//get a perticular review by its id
app.get('/api/users/reviews/all:userId', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['customer']
    next()
}, authorizeUser, reviewCltr.getReviewsByUser)//get a list of all the reviews of a perticular user
app.get('/api/technicians/reviews/all:technicianId', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['technician']
    next()
}, authorizeUser, reviewCltr.getReviewsByTechnician)//get a list of all reviews relavant to the specific technician.

// enquiries routes ##############################################################################################

app.post('/api/enquiries', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['customer']
    next()
}, authorizeUser, enquiryCltr.createEnquiry)//post a review
app.get('/api/enquiries/all', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, enquiryCltr.getAllEnquiries)//get whole enquiries
app.get('/api/enquiries/:id', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin', 'technician']
    next()
}, authorizeUser, enquiryCltr.getSingleEnquiry)//get a perticular review by its id .
//both Technician and admin can access the details of a specific review if they need more information before responding.
app.put('/api/enquiries/:id', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['technician']
    next()
}, authorizeUser, enquiryCltr.editSingleEnquiry)//get a perticular review by its id .
//Technician can update the status of an review mark as either pending or answered
app.get('/api/users/enquiries/all:userId', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['customer']
    next()
}, authorizeUser, enquiryCltr.getEnquriesByUser)//get a list of all the enquiries of a perticular user
app.get('/api/enquiries/enquiries/all:technicianId', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['technician']
    next()
}, authorizeUser, enquiryCltr.getEnquriesByTechnician)//get a list of all Enquiries relavant to the specific technician.

// booking routes ##############################################################################################


//admin routes #################################################################################################

app.get('/api/users/customers/all', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, userCltr.getAllCustomers)
app.get('/api/users/technicians/all', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, userCltr.getAllTechnicians)
app.listen(port, () => {
    console.log("server is running at port ", port)
    // console.log(process.env)
})
