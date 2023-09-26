import '../index.css'
import booking from '../assets/images/5041145.jpg'
import { Button } from 'reactstrap'
import Footer from '../component/Footer'
const BookingPage = (props) => {
    console.log(props.location.state)
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