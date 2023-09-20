const initialState = {
    userData: null,//or {}
    isLoading: true,
    isSuccess: false,
    isError: false,
    errorMessage: ''
}
const userRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_SUCCESS": {
            return {
                ...state,
                userData: action.payload,
                isLoading: false,
                isSuccess: true,
                isError: false,
                errorMessage: null
            }
        } case "REGISTER_FAILURE": {
            return {
                ...state,
                userData: null,
                isLoading: false,
                isSuccess: false,
                isError: true,
                errorMessage: action.payload
            }
        } default: {
            return { ...state }
        }
    }
}
export default userRegisterReducer