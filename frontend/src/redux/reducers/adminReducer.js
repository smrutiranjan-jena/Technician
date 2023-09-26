const initialState = {
    allTechnicians: [],
    allCustomers: [],
    allBookings: [],
    technicianDetails: {}
}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_TECHNICIANS": {
            return { ...state, allTechnicians: [...action.payload] }
        } case "GET_ALL_CUSTOMERS": {
            return { ...state, allCustomers: [...action.payload] }
        } case "GET_TECHNICIAN_DETAILS": {
            return { ...state, technicianDetails: { ...action.payload } }
        } default: {
            return { ...state }
        }
    }
}
export default adminReducer