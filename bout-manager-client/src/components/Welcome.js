import React, { Component } from 'react'
import ProfileForm from './ProfileForm.js'
import DistrictSelect from './DistrictSelect.js'
import TeamRadioContainer from '../containers/TeamRadioContainer.js'

class Welcome extends Component {

	state = {
		teams: []
	}

	setTeams = (teams) => {
		this.setState({
			teams: teams
		})
	}

    render() {
        return (
			<>
				<ProfileForm />
				<DistrictSelect setTeams={this.setTeams} />
				<TeamRadioContainer teams={this.state.teams} />
			</>
		)
    }
}

export default Welcome