import axios from 'axios'
// async action creators
export const startAddBooking = (bookingData, props) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('http://localhost:3004/api/bookings/create', bookingData, {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            console.log(response.data)
            dispatch(addBooking(response.data))
            props.history.push('/mybook')
        } catch (err) {
            console.log(err)
        }
    }
}
export const startGetAllBookingsByOwn = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('http://localhost:3004/api/bookings/all/own', {

                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            console.log(response.data)
            dispatch(getAllBookingsByOwn(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startGetAllAppointmentsByOwn = () => {
    return async (dispatch, getState) => {
        try {
            const response1 = await axios.get('http://localhost:3004/api/techniciandetails/own', {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            const response2 = await axios.get(`http://localhost:3004/api/bookings/all/${response1.data._id}`, {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            // console.log(response2.data)
            dispatch(getAllAppointmentsByOwn(response2.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startUpdateBooking = (id,status) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(`http://localhost:3004/api/bookings/update/${id}`,status, {

                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            console.log(response.data)
            dispatch(updateBooking(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startGetAllBookings = (id,status) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('http://localhost:3004/api/bookings/all', {

                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
            console.log(response.data)
            dispatch(getAllBookings(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
// sync action creators

export const addBooking = (data) => {
    return {
        type: "ADD_BOOKING",
        payload: data
    }
}

export const getAllBookingsByOwn = (data) => {
    return {
        type: "GET_ALL_BOOKINGS_BY_OWN",
        payload: data
    }
}
export const getAllAppointmentsByOwn = (data) => {
    return {
        type: "GET_ALL_APPOINTMENTS_BY_OWN",
        payload: data
    }
}
export const updateBooking = (data) => {
    return {
        type: "UPDATE_BOOKING",
        payload: data
    }
}
export const getAllBookings = (data) => {
    return {
        type: "GET_ALL_BOOKINGS",
        payload: data
    }
}