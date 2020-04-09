import React, { Component } from 'react'
import DistrictSelect from "./DistrictSelect.js"
import TeamRadioContainer from "../containers/TeamRadioContainer.js"


class TeamPeopleForm extends Component {
	state = {
		teams: []
	}

	setTeams = teams => {
		this.setState({
			teams: teams
		})
	}

	render() {
		return (
			<>
				<DistrictSelect setTeams={this.setTeams} />
				<TeamRadioContainer teams={this.state.teams} />
			</>
		)
	}
}

export default TeamPeopleForm