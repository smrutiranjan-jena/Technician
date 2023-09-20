const initialState = {
    userData: {},
    isLoading: true,
    isSuccess: false,
    isAuthenticated: false,
    isError: false,
    errorMessage: ''
}
const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                userData: action.payload,
                isLoading: false,
                isSuccess: true,
                isAuthenticated: true,
                isError:false,
                errorMessage:null
            }
        } case "LOGIN_FAILURE": {
            return {
                ...state,
                userData: null,
                isLoading: false,
                isSuccess: false,
                isAuthenticated: false,
                isError:true,
                errorMessage:action.payload
            }
        } default: {
            return { ...state }
        }
    }
}
export default userLoginReducer