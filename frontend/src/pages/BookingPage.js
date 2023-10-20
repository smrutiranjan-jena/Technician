import '../index.css'
import booking from '../assets/images/5041145.jpg'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { startAddBooking } from '../redux/actions/bookingActions'
import { Button } from 'reactstrap'
import Footer from '../component/Footer'
const BookingPage = (props) => {
    const dispatch = useDispatch()
    const loginInfo = useSelector((state) => {
        return state.loginInfo
    })
    const bookings = useSelector((state) => {
        return state.bookings
    })
    console.log(loginInfo)
    console.log(props.location.state)
    // 3rd open Razorpay payment comp
    const handleOpenRazorpay = (orderData) => {
        const options = {
            key: 'rzp_test_fVgZJ4nfMBNcvA',
            amount: orderData.amount * 100,
            currency: orderData.currency,
            name: 'Technician.com',
            description: 'xyz',
            order_id: orderData.id,
            theme: {
                "color": "#4472C4"
            },
            handler: function (response) {//call after succesful payment
                console.log(response)
                axios.post('http://localhost:3004/api/payments/verify', response)
                    .then((response) => {
                        console.log(response.data)
                        const bookingData = {
                            orderId: orderData.id,
                            date: new Date(),
                            technicianName: props.location.state.technician.name,
                            experience: props.location.state.technician.experience,
                            mobile: props.location.state.technician.mobile,
                            category: props.location.state.categoryTitle,
                            serviceType: props.location.state.serviceTitle,
                            amount: props.location.state.servicePrice,
                            userId: loginInfo.userData.id,
                            technicianId: props.location.state.technician._id,
                            paymentStatus: response.data.message,
                        }
                        dispatch(startAddBooking(bookingData, props))
                        console.log(bookings)
                    })
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }
    // 2nd payment button handle
    const handlePayment = (amount) => {
        const data = {
            amount: amount
        }
        axios.post('http://localhost:3004/api/payments/order', data)
            .then((response) => {
                console.log(response.data)
                handleOpenRazorpay(response.data.orderData)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="bookingContainer">
            <h1 className="commonHeading"> Booking Summary </h1>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="imagearea">
                        <img src={booking} />
                    </div>
                    <div className="textarea" style={{ textAlign: "right" }}>
                        <div >
                            <b>Category</b> : {props.location.state.categoryTitle}<br /><br />
                            <b>Technician</b> : {props.location.state.technician.name}<br /><br />
                            <b>Experience</b> : {props.location.state.technician.experience}yrs<br /><br />
                            <b>Service</b> :  {props.location.state.serviceTitle}<br /><br />
                            <b>Price</b> :  Rs.{props.location.state.servicePrice}/-<br /><br />
                            <span><Button
                                color="primary"
                                outline
                            >
                                Add Address
                            </Button>
                                &nbsp;&nbsp;
                                <Button
                                    color="primary"
                                    outline
                                    onClick={() => {
                                        handlePayment(props.location.state.servicePrice)
                                    }}
                                >
                                    Pay & Book
                                </Button></span>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div >
    )
}
export default BookingPage