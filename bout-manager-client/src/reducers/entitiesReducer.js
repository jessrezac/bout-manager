function updateObject(oldObject, newValues) {
	return Object.assign({}, oldObject, newValues)
}

const entitiesReducer = (
	state = { event: {}, team: {}, season: {}, organization: {} },
	action
) => {
	switch (action.type) {
		case "SET_ENTITIES":
			return Object.assign({}, state, action.entities)

		case "SET_TEAMS":
			return Object.assign({}, state, action.entities.team)

		case "SET_ORGANIZATIONS":
			return Object.assign({}, state, action.entities.organization)

		case "ADD_TEAM":
			return {
				...state,
				// Update our Entities object with a new "team" object
				team: updateObject(state.team, action.team),
			}

		case "ADD_ORGANIZATION":
			return {
				...state,
				// Update our entities object with a new "organization" object
				organization: updateObject(
					state.organization,
					action.organization
				),
			}

		default:
			return state
	}
}

export default entitiesReducer
