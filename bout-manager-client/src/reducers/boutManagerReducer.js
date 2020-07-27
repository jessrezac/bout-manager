import { combineReducers } from "redux"
import { createBrowserHistory } from "history"

import userReducer from "./userReducer"
import { connectRouter } from "connected-react-router"
import teamPersonReducer from "./teamPersonReducer"
import entitiesReducer from "./entitiesReducer"

export const history = createBrowserHistory()

const boutManagerReducer = combineReducers({
	router: connectRouter(history),
	loggedInUser: userReducer,
	entities: entitiesReducer,
})

export const rootReducer = (state, action) => {
	if (action.type === "LOGOUT") {
		state = undefined
	}

	return boutManagerReducer(state, action)
}
