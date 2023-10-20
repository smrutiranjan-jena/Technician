import axios from "axios";
// async action creators
export const startAddOwnDetails = (technicianDetails) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('http://localhost:3004/api/techniciandetails', technicianDetails, {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            dispatch(addOwnDetails(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startGetOwnDetails = (technicianDetails) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('http://localhost:3004/api/techniciandetails/own', {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            dispatch(getOwnDetails(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startUpdateOwnDetailsAvailability = (data) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.put('http://localhost:3004/api/techniciandetails/own/edit',data, {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }
}
// sync regular action creators
export const addOwnDetails = (data) => {
    return {
        type: "ADD_OWN_DETAILS",
        payload: data
    }
}
export const getOwnDetails = (data) => {
    return {
        type: "GET_OWN_DETAILS",
        payload: data
    }
}

