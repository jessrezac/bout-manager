import React, { Component } from 'react'
import ProfileForm from './ProfileForm.js'
import DistrictSelect from './DistrictSelect.js'
import TeamSelectContainer from './TeamSelectContainer.js'

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
			<section className="section">
				<h1 className="title is-1">Complete Your Profile</h1>
				<ProfileForm />
				<DistrictSelect setTeams={this.setTeams} />
				<TeamSelectContainer teams={this.state.teams} />
			</section>
		)
    }
}

export default Welcome