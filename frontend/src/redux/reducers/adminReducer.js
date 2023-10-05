const initialState = {
    allTechnicians: [],
    allCustomers: [],
    allBookings: [],
    technicianDetails: {},
    allCategories: []
}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_TECHNICIANS": {
            return { ...state, allTechnicians: [...action.payload] }
        } case "GET_ALL_CUSTOMERS": {
            return { ...state, allCustomers: [...action.payload] }
        } case "GET_TECHNICIAN_DETAILS": {
            return { ...state, technicianDetails: { ...action.payload } }
        } case "GET_ALL_CATEGORIES": {
            return { ...state, allCategories: [...action.payload] }
        } case "REMOVE_TECHNICIAN": {
            const newTechList = state.allTechnicians.filter((ele) => {
                return ele._id !== action.payload
            })
            return { ...state, allTechnicians:newTechList }
        }default: {
            return { ...state }
        }
    }
}
export default adminReducer