import axios from "axios"
import swal from 'sweetalert'

// async action creator
export const asyncUserLogin = (logInData) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('http://localhost:3004/api/users/login', logInData)
                swal("Good job!", `${response.data}`, "success", { button: "Ok" });
                console.log(response)
                dispatch(loginSuccess(response.data))
            
        } catch (error) {
            console.log(error)
            swal('Login failed try again',`${error.response.data.message}`,{ icon: 'error' })
            dispatch(loginFailure(error.message))
        }
    }
}
// sync action creator
export const loginSuccess = (userData) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: userData
    }
}
export const loginFailure = (error) => {
    return {
        type: "LOGIN_FAILURE",
        payload: error
    }
}