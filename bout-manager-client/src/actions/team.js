import normalize from "json-api-normalizer"

export function fetchTeams() {
	return (dispatch, getState) => {
		dispatch({ type: "START_ADDING_TEAMS_REQUEST" })
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + getState().loggedInUser.accessToken,
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

export function fetchTeam(teamId) {
	return (dispatch, getState) => {
		dispatch({ type: "START_ADDING_TEAMS_REQUEST" })
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + getState().loggedInUser.accessToken,
			},
		}

		fetch(`http://localhost:3000/api/v1/teams/` + teamId, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)
				dispatch({
					type: "SET_ENTITITES",
					entities: normalizedData,
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
				Authorization: "Bearer " + getState().loggedInUser.accessToken,
			},
			body: JSON.stringify({
				season_id: newTeam.selectedSeasonId,
				organization_id: newTeam.selectedOrgId,
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

export function deleteTeam(teamId) {
	return (dispatch) => {
		dispatch({ type: "DELETE_TEAM", team: teamId })
	}
}
