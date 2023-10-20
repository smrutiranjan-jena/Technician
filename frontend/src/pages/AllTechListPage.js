import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react"
import { startGetAllTechnicians } from "../redux/actions/adminActions"
import { startGetTechnicianDetails } from "../redux/actions/adminActions"
import { startRemoveTechnician } from "../redux/actions/adminActions"
const AllTechListPage = () => {
    const [search,setSearch]=useState('')
    const handleSerachChange=(e)=>{
        setSearch(e.target.value)
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const dispatch = useDispatch()
    const wholeList = useSelector((state) => {
        return state.wholeList
    })
    useEffect(() => {
        dispatch(startGetAllTechnicians())
    }, [])

    console.log(wholeList.allTechnicians)
    const showDetails = (id) => {
        dispatch(startGetTechnicianDetails(id))
    }
    console.log(wholeList)
    const handleRemove = (id) => {
        dispatch(startRemoveTechnician(id))
    }
    const result=wholeList.allTechnicians.filter((ele)=>{
        return ele.username.includes(search)
    })
    return (
        <div>
            <h1 className="commonHeading">All Technicians Here !</h1>
            <form id="searchFilter">
                <input type="text" value={search} onChange={handleSerachChange} placeholder="search technician"/>
                <i className="fa fa-search"></i>
            </form>
            <Table hover>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            id
                        </th>
                        <th>
                            Technician
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            createdAt
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {result.map((ele, ind) => {
                        return <tr >
                            <th scope="row">
                                {ind + 1}
                            </th>
                            <td>
                                {ele._id}
                            </td>
                            <td>
                                {ele.username}
                            </td>
                            <td>
                                {ele.email}
                            </td>
                            <td>
                                {ele.createdAt}
                            </td>
                            <td>
                                <Button
                                    color="primary"
                                    outline
                                    onClick={() => {
                                        toggle()
                                        showDetails(ele._id)
                                    }}
                                >
                                    Show Details
                                </Button>
                            </td>
                            <td>
                                <Button
                                    color="primary"
                                    outline
                                    onClick={() => {
                                        handleRemove(ele._id)
                                    }}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
            {/* modal  */}
            <Modal isOpen={modal} fade={false} toggle={toggle}>
                <ModalHeader toggle={toggle}>Technician Details</ModalHeader>
                <ModalBody style={{ textAlign: "center" }}>
                    <p>
                        <br /><br />
                        <i className="fa fa-user"></i>
                        {wholeList.technicianDetails.name}
                        <br /><br />
                        <i className="fa fa-phone"></i>
                        {wholeList.technicianDetails.mobile}
                        <br /><br />
                        <i className="fa fa-tasks"></i>
                        {wholeList.technicianDetails.category}
                        <br /><br />
                        City :
                        {wholeList.technicianDetails.city}
                        <br /><br />
                        availability :
                        {wholeList.technicianDetails.availability ? 'yes' : 'no'}
                        <br /><br />
                        Experience(YOE) :
                        {wholeList.technicianDetails.experience}yrs
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
            {/* modal  */}
        </div>
    )
}
export default AllTechListPage