import normalize from "json-api-normalizer"

export const setEntities = (entities) => {
	return {
		type: "SET_ENTITIES",
		entities: entities,
	}
}

export const fetchEvents = () => {
	return (dispatch, getState) => {
		const user = getState().loggedInUser
		let userAuthorizationTokens = user.tokenType + " " + user.accessToken
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: userAuthorizationTokens,
			},
		}

		fetch(`http://localhost:3000/api/v1/events`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)
				console.log(normalizedData)
				dispatch({
					type: "SET_ENTITIES",
					entities: normalizedData,
				})
			})
			.catch((err) => {
				// ignore errors
			})
	}
}
