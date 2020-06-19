import normalize from "json-api-normalizer"

export function fetchTeams() {
	return (dispatch, getState) => {
		dispatch({ type: "START_ADDING_TEAMS_REQUEST" })
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + getState().user.user.access_token,
			},
		}

		fetch(`http://localhost:3000/api/v1/teams`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)
				dispatch({
					type: "SET_TEAMS",
					entities: { team: normalizedData },
				})
			})
	}
}

export function createTeam(newTeam) {
	return (dispatch, getState) => {
		const configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + getState().user.user.access_token,
			},
			body: JSON.stringify({
				season_id: newTeam.seasonId,
				organization_id: newTeam.orgId,
			}),
		}

		fetch(`http://localhost:3000/api/v1/teams`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)
				dispatch({
					type: "ADD_TEAM",
					team: normalizedData.team,
				})
			})
	}
}
