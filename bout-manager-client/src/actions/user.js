import { history } from "../reducers/boutManagerReducer"

export const setLoginPending = () => {
	return { type: "SET_LOGIN_PENDING" }
}

export const setLoginSuccess = (user) => {
	return { type: "SET_LOGIN_SUCCESS", user: user }
}

export const setLoginError = (loginError) => {
	return { type: "SET_LOGIN_ERROR", loginError: loginError }
}

export const setRegistrationErrors = (registrationErrors) => {
	return {
		type: "SET_REGISTRATION_ERRORS",
		registrationErrors: registrationErrors,
	}
}

export const logout = () => {
	history.push("/")
	return { type: "LOGOUT" }
}
