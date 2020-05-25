import { combineReducers } from "redux"
import userReducer from "./userReducer"
import { connectRouter } from "connected-react-router"
import teamPersonReducer from "./teamPersonReducer"
import entitiesReducer from "./entitiesReducer"
import teamReducer from "./teamReducer"

const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		user: userReducer,
		team: teamPersonReducer,
		teams: teamReducer,
		entities: entitiesReducer,
	})

export default rootReducer
