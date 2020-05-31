import { combineReducers } from "redux"
import userReducer from "./userReducer"
import { connectRouter } from "connected-react-router"
import teamPersonReducer from "./teamPersonReducer"
import entitiesReducer from "./entitiesReducer"

const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		user: userReducer,
		team: teamPersonReducer,
		entities: entitiesReducer,
	})

export default rootReducer
