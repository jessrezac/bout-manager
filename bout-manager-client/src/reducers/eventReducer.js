export default function eventReducer(
	state = {
		datetime: null,
		location: "",
		name: "",
		season: [],
		teams: [],
	},
	action
) {
	switch (action.type) {
		case "SET_EVENT":
			return state

		default:
			return state
	}
}
