const entitiesReducer = (
	state = { event: {}, team: {}, season: {} },
	action
) => {
	switch (action.type) {
		case "SET_ENTITIES":
			return Object.assign({}, state, action.entities)

		default:
			return state
	}
}

export default entitiesReducer
