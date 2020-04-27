import { combineReducers } from 'redux'
import userReducer from './userReducer'
import { connectRouter } from "connected-react-router"
import teamPersonReducer from './teamPersonReducer';
import teamReducer from './teamReducer'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    user: userReducer,
    team: teamPersonReducer,
    teams: teamReducer});

export default rootReducer