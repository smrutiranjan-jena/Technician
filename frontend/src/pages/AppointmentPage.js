import { useEffect } from "react"
import '../index.css'
import Swal from 'sweetalert2'
import Pikaday from 'pikaday'
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardText, Button } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux"
import { startGetAllAppointmentsByOwn } from "../redux/actions/bookingActions"
import { startUpdateBooking } from "../redux/actions/bookingActions"
const AppointmentPage = (props) => {
    const dispatch = useDispatch()
    const bookings = useSelector((state) => {
        return state.bookings
    })
    useEffect(() => {
        dispatch(startGetAllAppointmentsByOwn())
    }, [])
    console.log(bookings.filteredAppointments)

    const handleStatusConfirm = async (id) => {

        let datepicker

        Swal.fire({
            title: 'Please enter departure date',
            input: 'text',
            inputValue: new Date().toISOString(),
            stopKeydownPropagation: false,
            preConfirm: () => {
                if (datepicker.getDate() < new Date(new Date().setHours(0, 0, 0, 0))) {
                    Swal.showValidationMessage(`The departure date can't be in the past`)
                }
                return datepicker.getDate()
            },
            didOpen: () => {
                datepicker = new Pikaday({ field: Swal.getInput() })
                setTimeout(() => datepicker.show(), 400) // show calendar after showing animation
            },
            didClose: () => {
                datepicker.destroy()
            },
        }).then((result) => {
            console.log(result.value)
            const data = {
                bookingStatus: 'confirmed',
                reachingDate: result.value
            }
            dispatch(startUpdateBooking(id, data))
        })


    }
    const handleStatusCancel = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be loosing this appointment!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const data = {
                    bookingStatus: "cancelled",
                }
                dispatch(startUpdateBooking(id, data))
                Swal.fire(
                    'Cancelled!',
                    'Your appontment has been cancelled.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            <h1 className="commonHeading"> Your Appointments Are Here! </h1>
            <div className="bookingsBoxContainer">
                {bookings.filteredAppointments.map((ele) => {
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
                                Appointment Details
                            </CardTitle>
                            <CardText>
                                {/* <b>Technician</b> : {ele.technicianName}<br />
                                <b>Experience</b> :{ele.experience}yrs<br /> */}
                                <b>Service</b> : {ele.serviceType}<br />
                                <b>Amount</b> : Rs.{ele.amount}/-<br />
                                <b>Payment</b> : {ele.paymentStatus}<br />
                                <b>ReachingDate</b> : {ele.reachingDate}<br /><br />
                                <b>Status</b> : <span style={{ color: "red" }}>{ele.bookingStatus}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                {ele.bookingStatus === "pending" ? (
                                    <span>
                                        <Button
                                            color="primary"
                                            outline
                                            onClick={() => {
                                                handleStatusConfirm(ele._id)
                                            }}
                                        >
                                            confirm
                                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button
                                            color="primary"
                                            outline
                                            onClick={() => {
                                                handleStatusCancel(ele._id)
                                            }}
                                        >
                                            cancel
                                        </Button>
                                    </span>
                                ) : <span>&nbsp;&nbsp;<Button
                                    color="primary"
                                    outline
                                    onClick={() => {
                                        handleStatusCancel(ele._id)
                                    }}
                                >
                                    cancel
                                </Button></span>}<br />
                            </CardText>
                        </CardBody>
                    </Card>
                })}
            </div>
        </div>
    )
}
export default AppointmentPage