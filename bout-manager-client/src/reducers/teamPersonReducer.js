export default function teamPersonReducer(
	state = {
		team: {},
		person: {},
		role: "",
		teamName: "",
		teamSeason: "",
	},
	action
) {
	switch (action.type) {
		case "SET_TEAM":
			return Object.assign({}, state, {
				team: action.team,
				person: action.person,
				role: action.role,
				teamName: action.teamName,
				teamSeason: action.teamSeason,
			})

		case "REMOVE_TEAM":
			return Object.assign({}, state, {
				team: {},
				person: {},
				role: "",
				teamName: "",
				teamSeason: "",
			})

		default:
			return state
	}
}
