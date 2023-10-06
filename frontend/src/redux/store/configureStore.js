import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import categoryReducer from '../reducers/categoryReducer'
import userRegisterReducer from '../reducers/userRegisterReducer'
import userLoginReducer from '../reducers/userLoginReducer'
import userReducer from '../reducers/userReducer'
import technicianReducer from '../reducers/technicianReducer'
import findTechnicianReducer from '../reducers/findTechnicianReducer'
import adminReducer from '../reducers/adminReducer'
import bookingReducer from '../reducers/bookingReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        categories: categoryReducer,
        registerInfo: userRegisterReducer,
        loginInfo: userLoginReducer,
        user:userReducer,
        technician:technicianReducer,
        AllfillteredTechList:findTechnicianReducer,
        wholeList:adminReducer,
        bookings:bookingReducer
    }), applyMiddleware(thunk))
    return store
}
export default configureStore