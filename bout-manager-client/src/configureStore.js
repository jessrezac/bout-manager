import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import boutManagerReducer from './reducers/boutManagerReducer'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const store = createStore(
		boutManagerReducer(history), // root reducer with router state
		preloadedState,
		compose(
			applyMiddleware(
				routerMiddleware(history) // for dispatching history actions
				// ... other middlewares ...
			),
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	)

    return store
}