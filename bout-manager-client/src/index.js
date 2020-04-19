import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.scss';
import * as serviceWorker from './serviceWorker';
import App from "./App"
import Welcome from "./components/Welcome"
import Dashboard from "./components/Dashboard"
import Settings from "./components/Settings"
import Header from "./components/Header"
import { Provider } from "react-redux"
import configureStore, { history } from "./configureStore"
import { ConnectedRouter } from "connected-react-router"
import { Route, Switch } from "react-router-dom"
import { loadState, saveState } from "./utils/localStorage"


const persistedState = loadState()
const store = configureStore(persistedState)

store.subscribe(() => {
	saveState(store.getState())
})

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Header />
			<Switch>
				<Route path="/welcome">
					<Welcome />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/settings">
					<Settings />
				</Route>
				<Route exact path="/">
					<App />
				</Route>
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
