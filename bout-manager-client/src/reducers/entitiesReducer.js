import merge from "lodash/merge"

const entitiesReducer = (
	state = { event: {}, team: {}, season: {}, organization: {} },
	action
) => {
	switch (action.type) {
		case "SET_ENTITIES":
			return Object.assign({}, state, action.entities)

		case "SET_TEAMS":
			return merge({}, state, action.entities.team)

		case "SET_ORGANIZATIONS":
			return merge({}, state, action.entities.organization)

		default:
			return state
	}
}

export default entitiesReducer
