export default function userReducer(
	state = {
		isLoginSuccess: false,
		isLoginPending: false,
		profileComplete: false,

		// doorkeeper details
		accessToken: "",
		refreshToken: "",
		tokenType: "",
		expiresIn: null,

		//eventually move these to an errors reducer in state
		loginError: "",
		registrationErrors: {},

		// attributes for the user
		user: {},

		// attributes for the person
		person: {},

		// attributes for the user's person's team
		teamPerson: {},
	},
	action
) {
	switch (action.type) {
		case "SET_LOGIN_PENDING":
			return Object.assign({}, state, { isLoginPending: true })

		case "SET_LOGIN_SUCCESS":
			console.log(action.user)
			const parsedUser = JSON.parse(action.user.user)
			const parsedPerson = JSON.parse(action.user.person)
			const parsedTeamPerson = JSON.parse(action.user.team_person)
			return Object.assign({}, state, {
				isLoginSuccess: true,
				profileComplete: action.user.profile_complete,
				accessToken: action.user.access_token,
				refreshToken: action.user.refresh_token,
				tokenType: action.user.token_type,
				expiresIn: action.user.expires_in,
				user: parsedUser,
				person: parsedPerson,
				teamPerson: parsedTeamPerson,
			})

		case "SET_USER_TEAM_PERSON":
			return Object.assign({}, state, {
				teamPerson: action.teamPerson,
			})

		case "SET_USER_PERSON":
			return Object.assign({}, state, {
				person: action.person,
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

		default:
			return state
	}
}
