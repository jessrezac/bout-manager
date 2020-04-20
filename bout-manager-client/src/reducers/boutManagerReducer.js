import { combineReducers } from 'redux'
import userReducer from './userReducer'
import { connectRouter } from "connected-react-router"
import teamPersonReducer from './teamPersonReducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    user: userReducer,
    team: teamPersonReducer});

export default rootReducer