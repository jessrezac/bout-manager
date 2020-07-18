import normalize from "json-api-normalizer"

export function fetchOrganizations() {
	return (dispatch, getState) => {
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + getState().loggedInUser.accessToken,
			},
		}

		fetch(`http://localhost:3000/api/v1/organizations`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)
				dispatch({
					type: "SET_ORGANIZATIONS",
					entities: { organization: normalizedData },
				})
			})
	}
}

export function createOrganizationWithTeam(newOrganization) {
	return (dispatch, getState) => {
		const configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + getState().loggedInuser.accessToken,
			},
			body: JSON.stringify({
				name: newOrganization.orgName,
				org_type: newOrganization.orgType,
				teams_attributes: [
					{ season_id: newOrganization.selectedSeasonId },
				],
			}),
		}

		fetch(`http://localhost:3000/api/v1/organizations`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)
				dispatch({
					type: "ADD_TEAM",
					team: normalizedData.team,
				})
				dispatch({
					type: "ADD_ORGANIZATION",
					organization: normalizedData.organization,
				})
			})
	}
}
