import { Button } from "reactstrap";
const EmptyMyBook = (props) => {
    return (
        <div style={{
            width: "500px",
            margin: "150px auto",
            textAlign: "center",
            color: "#4472C4",
            fontSize: "30px"
        }}>
            <p
                style={{
                    fontSize: "50px"
                }}>No Bookings Found!</p>
            <p>Book Your First Technician</p>
            <Button
                color="primary"
                outline
                onClick={() => {
                    props.history.push('/home')
                }}
            >
                Book Now
            </Button>
        </div>
    )
}
export default EmptyMyBook