export function fetchTeams() {

    return (dispatch, getState) => {
        dispatch({type: 'START_ADDING_TEAMS_REQUEST'})
        console.log(getState())
        const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + getState().user.user.access_token,
			},
		}

		fetch(
			`http://localhost:3000/api/v1/teams`,
			configObj
		)
			.then((resp) => resp.json())
			.then((data) => {
                dispatch({type: 'ADD_TEAMS', teams: data.data})
			})
    }
}