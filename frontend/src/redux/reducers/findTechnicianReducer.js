const initiaState = {
    filteredTechList: []
}
const findTechnicianReducer = (state = initiaState, action) => {
    switch (action.type) {
        case "FIND_TECHNICIANS": {
            return { ...state, filteredTechList: [...action.payload] }
        } default: {
            return { ...state }
        }
    }
}
export default findTechnicianReducer