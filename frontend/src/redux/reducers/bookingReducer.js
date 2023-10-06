const initialState = {
    allbookings: [],
    filteredBookings: [],
    filteredAppointments: []
}
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOKING": {
            return { ...state, allbookings: [...state.allbookings, action.payload] }
        } case "GET_ALL_BOOKINGS_BY_OWN": {
            return { ...state, filteredBookings: [...action.payload] }
        } case "GET_ALL_APPOINTMENTS_BY_OWN": {
            return { ...state, filteredAppointments: [...action.payload] }
        } case "UPDATE_BOOKING": {
            // return { ...state, filteredAppointments: [...state.filteredAppointments] }
        } case "GET_ALL_BOOKINGS": {
            return { ...state, allbookings: [...action.payload] }
        } default: {
            return { ...state }
        }
    }

}
export default bookingReducer