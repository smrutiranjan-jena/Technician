const initialState = {
    ownDetails: {}
}
const technicianReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_OWN_DETAILS": {
            return { ...state }
        } case "GET_OWN_DETAILS": {
            return { ...state, ownDetails: { ...action.payload } }
        }
        default: {
            return { ...state }
        }
    }
}
export default technicianReducer