import axios from "axios"
import swal from 'sweetalert'

// async action creator
export const asyncUserLogin = (logInData, props) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('http://localhost:3004/api/users/login', logInData)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('role',response.data.role)
            dispatch(loginSuccess(response.data))
            swal("Good job!", `${response.data.message}`, "success", { button: "Ok" });
            props.history.push('/home')
        } catch (error) {
            dispatch(loginFailure(error.message))
            swal('Login failed try again', `${error.response.data.message}`, { icon: 'error' })
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