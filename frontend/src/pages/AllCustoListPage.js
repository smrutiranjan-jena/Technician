import { Table } from "reactstrap"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { startGetAllCustomers } from "../redux/actions/adminActions"
const AllCustoListPage = () => {
    const [search,setSearch]=useState('')
    const handleSerachChange=(e)=>{
        setSearch(e.target.value)
    }
    const dispatch = useDispatch()
    const wholeList = useSelector((state) => {
        return state.wholeList
    })
    useEffect(() => {
        dispatch(startGetAllCustomers())
    }, [])
    console.log(wholeList)
    const result=wholeList.allCustomers.filter((ele)=>{
        return ele.username.includes(search)
    })
    console.log(result)
    return (
        <div>
            <h1 className="commonHeading">All Customers Here !</h1>
            <form id="searchFilter">
                <input type="text" value={search} onChange={handleSerachChange} placeholder="search customer"/>
                <i className="fa fa-search"></i>
            </form>
            <Table hover>
                <thead >
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
                    {result.map((ele, ind) => {
                        return <tr>
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
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default AllCustoListPage