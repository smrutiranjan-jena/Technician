import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetOwnDetails } from "../redux/actions/technicianActions";
import { Form, FormGroup, Label, Input, Card, CardTitle, CardText } from 'reactstrap';
import { startUpdateOwnDetailsAvailability } from "../redux/actions/technicianActions";
const TechDetailsShow = () => {
    const dispatch = useDispatch()
    const technician = useSelector((state) => {
        return state.technician
    })
    const [state, setState] = useState(technician.ownDetails.availability);
    useEffect(() => {
        dispatch(startGetOwnDetails())
    }, [])
    dispatch(startUpdateOwnDetailsAvailability({ availability: state }))
    return (
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", margin: "40px" }}>
            <Card inverse style={{ backgroundColor: "#4472C4", padding: '40px', margin: "40px" }}>
                <CardTitle tag="h5" style={{ fontSize: "25px" }}>
                    Your Details
                </CardTitle><br></br>
                <CardText>
                    < p >
                        <b>Name </b>--
                        &nbsp;{technician.ownDetails.name}
                        &nbsp; &nbsp;
                        <b>Contact </b>--
                        &nbsp;{technician.ownDetails.mobile}
                        &nbsp; &nbsp;
                        <b>Category </b>--
                        &nbsp;{technician.ownDetails.category}
                        <br /><br />
                        <b>City</b> --
                        &nbsp;{technician.ownDetails.city}
                        &nbsp; &nbsp;
                        <b>Experience(YOE)</b>  --
                        &nbsp;{technician.ownDetails.experience} yrs
                    </p >
                    <Form >
                        <b> Availability</b>
                        <FormGroup switch>
                            <Input
                                style={{ border: "2px solid white" }}
                                type="switch"
                                checked={state}
                                onClick={() => {
                                    setState(!state);
                                }}
                            />
                        </FormGroup>
                    </Form>
                </CardText>
            </Card>
        </div>
    )
}
export default TechDetailsShow