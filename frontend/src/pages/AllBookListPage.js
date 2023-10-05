import { useEffect } from 'react'
import { Table } from "reactstrap"
import { useDispatch, useSelector } from 'react-redux'
import { startGetAllBookings } from '../redux/actions/bookingActions'
const AllBookListPage = () => {
    const dispatch = useDispatch()
    const bookings = useSelector((state) => {
        return state.bookings
    })
    console.log(bookings.allbookings)
    useEffect(() => {
        dispatch(startGetAllBookings())
    }, [])
    return (
        <div>
            <h1 className="commonHeading">All Bookings Here !</h1>
            <Table hover>
                <thead >
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            BookingId
                        </th>
                        <th>
                            CustomerId
                        </th>
                        <th>
                            TechnicianId
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            ServiceType
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            PaymentStatus
                        </th>
                        <th>
                            BookingStatus
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {bookings.allbookings.map((ele, ind) => {
                        return <tr>
                            <th scope="row">
                                {ind + 1}
                            </th>
                            <td>
                                {ele._id}
                            </td>
                            <td>
                                {ele.userId}
                            </td>
                            <td>
                                {ele.technicianId}
                            </td>
                            <td>
                                {ele.category}
                            </td>
                            <td>
                                {ele.serviceType}
                            </td>
                            <td>
                                Rs.{ele.amount}/-
                            </td>
                            <td>
                                {ele.paymentStatus}
                            </td>
                            <td>
                                {ele.bookingStatus}
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default AllBookListPage