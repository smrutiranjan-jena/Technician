import axios from 'axios'
// async action creators
export const startGetAllTechnicians = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('http://localhost:3004/api/users/technicians/all', {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            dispatch(getAllTechnicians(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startGetAllCustomers = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('http://localhost:3004/api/users/customers/all', {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            dispatch(getAllCustomers(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startGetTechnicianDetails = (id) => {

    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`http://localhost:3004/api/techniciandetails/${id}`, {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            dispatch(getTechnicianDetails(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startGetAllCategories = (id) => {

    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`http://localhost:3004/api/categories/all`, {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            dispatch(getAllCategories(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startRemoveTechnician = (id) => {

    return async (dispatch, getState) => {
        try {
            const response = await axios.delete(`http://localhost:3004/api/users/${id}`, {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            console.log(response.data)
            dispatch(removeTechnician(id))
        } catch (err) {
            console.log(err)
        }
    }
}
// sync action creators
export const getAllTechnicians = (data) => {
    return {
        type: "GET_ALL_TECHNICIANS",
        payload: data
    }
}
export const getAllCustomers = (data) => {
    return {
        type: "GET_ALL_CUSTOMERS",
        payload: data
    }
}
export const getTechnicianDetails = (data) => {
    return {
        type: "GET_TECHNICIAN_DETAILS",
        payload: data
    }
}
export const getAllCategories = (data) => {
    return {
        type: "GET_ALL_CATEGORIES",
        payload: data
    }
}
export const removeTechnician = (id) => {
    return {
        type: "REMOVE_TECHNICIAN",
        payload:id
    }
}