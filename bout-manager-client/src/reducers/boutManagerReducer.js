import { combineReducers } from 'redux'
import userReducer from './userReducer'
import { connectRouter } from "connected-react-router"

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    user: userReducer});

export default rootReducer