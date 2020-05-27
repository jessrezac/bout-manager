const entitiesReducer = (
	state = { event: {}, team: {}, season: {} },
	action
) => {
	switch (action.type) {
		case "SET_ENTITIES":
			return Object.assign({}, state, action.entities)

		case "SET_TEAMS":
			return Object.assign({}, state, {
				entities: { team: action.team },
			})

		default:
			return state
	}
}

export default entitiesReducer
