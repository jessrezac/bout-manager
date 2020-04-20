export const setTeam = (team) => {
    return { type: "SET_TEAM",
        team: team.team,
        person: team.person,
        role: team.role,
        teamName: team.team_name,
        teamSeason: team.team_season
}
}

export const removeTeam = () => {
    return { type: "REMOVE_TEAM" }
}
