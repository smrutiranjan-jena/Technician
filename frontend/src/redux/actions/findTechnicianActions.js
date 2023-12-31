import axios from 'axios'
// async action creators
export const startFindTechnician = (filterQuery) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`http://localhost:3004/api/techniciandetails/all/${filterQuery.category}/${filterQuery.city}/${filterQuery.availability}`, {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            console.log(response.data)
            dispatch(findTechnician(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
// sync action creators
export const findTechnician=(data)=>{
     return{
        type:"FIND_TECHNICIANS",
        payload:data
     }
}