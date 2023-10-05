const initialState = {}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_PROFILE_DETAILS": {
            return { ...action.payload }
        }  default: {
            return { ...state }
        }
    }
}
export default userReducer