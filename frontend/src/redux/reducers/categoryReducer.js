const initialValue = []
const categoryReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "GET_All_CATEGORIES": {
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default categoryReducer