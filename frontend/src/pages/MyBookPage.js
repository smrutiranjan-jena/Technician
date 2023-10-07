import { useEffect } from "react"
import '../index.css'
import EmptyMyBook from "../component/EmptyMyBook"
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardText, Button } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux"
import { startGetAllBookingsByOwn } from "../redux/actions/bookingActions"
const MyBookPage = (props) => {
    const dispatch = useDispatch()
    const bookings = useSelector((state) => {
        return state.bookings
    })
    useEffect(() => {
        dispatch(startGetAllBookingsByOwn())
    }, [])
    console.log(bookings.filteredBookings)
    return (
        <div>
            <h1 className="commonHeading"> Your Bookings Are Here! </h1>
            {bookings.filteredBookings.length === 0 ? (
                <EmptyMyBook {...props}/>
            ) : (
                <div className="bookingsBoxContainer">
                    {bookings.filteredBookings.map((ele) => {
                        return <Card
                            className="my-2"
                            style={{
                                width: '40rem'
                            }}
                        >
                            <CardHeader>
                                Booking Id : {ele._id}
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Booking Details
                                </CardTitle>
                                <CardText>
                                    <b>Technician</b> : {ele.technicianName}<br />
                                    <b>Contact</b> : {ele.mobile}<br />
                                    <b>Experience</b> :{ele.experience}yrs<br />
                                    <b>Service</b> : {ele.serviceType}<br />
                                    <b>Amount</b> : Rs.{ele.amount}/-<br />
                                    <b>Payment</b> : {ele.paymentStatus}<br />
                                    <b>Status</b> : {ele.bookingStatus}<br />
                                    <b>ReachingDate</b> : {ele.reachingDate}<br />
                                </CardText>
                            </CardBody>
                        </Card>
                    })}
                </div>
            )
            }

        </div >
    )
}
export default MyBookPage