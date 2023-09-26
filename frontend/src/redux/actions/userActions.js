import axios from 'axios'
// async action creator
export const startGetUserProfileDetails = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('http://localhost:3004/api/users/profile', {
                headers: {
                    "o-auth": localStorage.getItem('token')
                }
            })
           dispatch(getUserProfileDetails(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
const getUserProfileDetails = (userData) => {
    return {
        type: "GET_USER_PROFILE_DETAILS",
        payload:userData
    }
}