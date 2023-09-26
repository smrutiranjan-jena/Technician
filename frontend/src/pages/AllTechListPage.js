import { Table } from "reactstrap"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { startGetAllTechnicians } from "../redux/actions/adminActions"
import { startGetTechnicianDetails } from "../redux/actions/adminActions"
const AllTechListPage = () => {
    const dispatch = useDispatch()
    const wholeList = useSelector((state) => {
        return state.wholeList
    })
    useEffect(() => {
        dispatch(startGetAllTechnicians())
    }, [])

    console.log(wholeList.allTechnicians)
    const showDetails=(id)=>{
        dispatch(startGetTechnicianDetails(id))
    }
    console.log(wholeList)
    return (
        <div>
            <h1 className="commonHeading">All Technicians Here</h1>
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
                            Customer
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
                    {wholeList.allTechnicians.map((ele,ind)=>{
                        return <tr onClick={()=>{
                            showDetails(ele._id)
                        }}>
                        <th scope="row">
                            {ind+1}
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
                    </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default AllTechListPage