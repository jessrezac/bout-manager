import { createBrowserHistory } from "history"
import { applyMiddleware, compose, createStore } from "redux"
import { routerMiddleware } from "connected-react-router"
import rootReducer from "./reducers/boutManagerReducer"
import thunk from "redux-thunk"

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
	const store = createStore(
		rootReducer(history), // root reducer with router state
		preloadedState,
		compose(
			applyMiddleware(
				routerMiddleware(history), // for dispatching history actions
				thunk // async redux with redux-thunk
				// ... other middlewares ...
			),
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	)

	return store
}
