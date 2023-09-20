import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import categoryReducer from '../reducers/categoryReducer'
import userRegisterReducer from '../reducers/userRegisterReducer'
import userLoginReducer from '../reducers/userLoginReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        categories: categoryReducer,
        registerInfo: userRegisterReducer,
        loginInfo: userLoginReducer
    }), applyMiddleware(thunk))
    return store
}
export default configureStore