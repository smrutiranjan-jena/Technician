import '../index.css'
import { Card, CardText, CardTitle, Button } from "reactstrap"
import Footer from '../component/Footer'
import { useDispatch, useSelector } from "react-redux"
import NoTechFound from '../component/NoTechFound'
const DisplayTechniciansByCategoryPage = (props) => {
    const dispatch = useDispatch()
    const AllfillteredTechList = useSelector((state) => {
        return state.AllfillteredTechList
    })
    console.log(AllfillteredTechList.filteredTechList)
    const BookMeAction = (technician) => {
        props.history.push({
            pathname: '/booking',
            state: { ...props.location.state, technician: technician }
        })
    }
    return (
        <div >
            {AllfillteredTechList.filteredTechList.length === 0 ? (
                <NoTechFound {...props} />
            ) : (
                <div className="DTP-container">
                    {AllfillteredTechList.filteredTechList.map((technician) => {
                        return <div className="DTP-card-container" key={technician._id}>
                            <Card
                                body
                                className="my-2"
                                style={{
                                    width: '18rem', textAlign: "left"
                                }}
                            >
                                <CardTitle tag="h5">
                                    {technician.name}
                                </CardTitle><br />
                                <CardText>
                                    Category : {technician.category}<br />
                                    City : {technician.city}<br />
                                    Experience : {technician.experience}yrs<br />
                                    Mobile : {technician.mobile} <br />
                                    availabity : {technician.availability ? "yes" : "no"} <br />
                                </CardText>
                                <Button color="primary" onClick={() => {
                                    BookMeAction(technician)
                                }}>
                                    Book Me
                                </Button>
                                <div className='enquiry-container'>
                                    <p>Enquiry</p>
                                    <a href={`tel:${technician.mobile}`}> <i className='fa fa-phone'></i></a>
                                    <a href={`https://api.whatsapp.com/send?phone=${technician.mobile}`} target="_blank" rel="noopener noreferrer">
                                        <i className='fa fa-whatsapp'></i>
                                    </a>
                                </div>
                            </Card>
                        </div>
                    })}
                </div>
            )}

            <Footer />
        </div>
    )
}
export default DisplayTechniciansByCategoryPage