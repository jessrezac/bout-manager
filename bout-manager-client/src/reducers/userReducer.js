import boutManagerReducer from "./boutManagerReducer"

export default function userReducer(
	state = {
		isLoginSuccess: false,
		isLoginPending: false,
		loginError: "",
		registrationErrors: {},
		user: {},
	},
	action
) {
	switch (action.type) {
		case "SET_LOGIN_PENDING":
			return Object.assign({}, state, { isLoginPending: true })

		case "SET_LOGIN_SUCCESS":
			return Object.assign({}, state, {
				isLoginSuccess: true,
				user: action.user,
			})

		case "SET_LOGIN_ERROR":
			return Object.assign({}, state, {
				isLoginPending: false,
				loginError: action.loginError,
			})

		case "SET_REGISTRATION_ERRORS":
			return Object.assign({}, state, {
				registrationErrors: action.registrationErrors,
			})

		// case "LOGOUT":
		// 	localStorage.removeItem("state")
		// 	const { history } = state
		// 	state = { history }

		// 	return boutManagerReducer(state)

		default:
			return state
	}
}
