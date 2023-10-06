import { Button } from "reactstrap";

const PageNotFound = (props) => {
    return (
        <div style={{
            width: "300px",
            margin: "150px auto",
            textAlign: "center",
            color: "#4472C4",
            fontSize: "30px"
        }}>
            <p
                style={{
                    fontSize: "100px"
                }}>404</p>
            <p>Page Not Found</p>
            <Button
                color="primary"
                outline
                onClick={() => {
                    props.history.push('/home')
                }}
            >
                Back To Home
            </Button>
        </div>
    )
}
export default PageNotFound;