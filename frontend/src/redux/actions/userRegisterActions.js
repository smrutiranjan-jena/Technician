import axios from "axios"
import swal from 'sweetalert'

// async action creator
export const asyncUserRegister = (registeredData) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('http://localhost:3004/api/users/register', registeredData)
            swal("Good job!", `${response.data.message}`, "success", { button: "Ok" });
            dispatch(registerSuccess(response.data))
        } catch (error) {
            swal('Registration failed try again',{ icon: 'error' })
            dispatch(registerFailure(error.message))
        }
    }
}
// sync action creator
export const registerSuccess = (userData) => {
    return {
        type: "REGISTER_SUCCESS",
        payload: userData
    }
}
export const registerFailure = (error) => {
    return {
        type: "REGISTER_FAILURE",
        payload: error
    }
}