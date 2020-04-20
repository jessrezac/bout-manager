export const setTeam = (team) => {
	return { type: "SET_TEAM", team: team }
}

export const removeTeam = () => {
    return { type: "REMOVE_TEAM"}
}
