import { Button } from "reactstrap";
const NoTechFound = (props) => {
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
                }}>Sorry ! </p>
            <p>No Technician Avaliable...</p>
            <Button
                color="primary"
                outline
                onClick={() => {
                    props.history.push('/home')
                }}
            >
                 Try Again
            </Button>
        </div>
    )
}
export default NoTechFound