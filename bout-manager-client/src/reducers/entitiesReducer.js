function updateObject(oldObject, newValues) {
	return Object.assign({}, oldObject, newValues)
}

function updateItemInObject(object, itemId, updateItemCallback) {
	const updateItems = Object.keys(object).map((keyId) => {
		if (keyId != itemId) {
			return object[keyId]
		}

		const updatedItem = updateItemCallback(object[keyId])
		return updatedItem
	})
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

		default:
			return state
	}
}

export default entitiesReducer
