import axios from 'axios'
// async action creator
export const asyncGetAllCategories = () => {
    return async (dispatch,getState) => {
        try {
            const response = await axios.get('http://localhost:3004/api/categories/all')
            dispatch(getAllCategories(response.data))
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }
}
// sync action creator
export const getAllCategories = (data) => {
    return {
        type: "GET_All_CATEGORIES",
        payload: data
    }
}