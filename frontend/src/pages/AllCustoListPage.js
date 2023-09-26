import { Table } from "reactstrap"
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react"
import { startGetAllCustomers } from "../redux/actions/adminActions"
const AllCustoListPage = () => {
    const dispatch=useDispatch()
    const wholeList=useSelector((state)=>{
        return state.wholeList
    })
    useEffect(()=>{
        dispatch(startGetAllCustomers())
    },[])
    console.log(wholeList)
    return (
        <div>
            <h1 className="commonHeading">All Costumers Here</h1>
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
                    {wholeList.allCustomers.map((ele,ind)=>{
                        return <tr>
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
export default AllCustoListPage