import React, { Component } from 'react'
import { connect } from "react-redux"
import DistrictSelect from "./DistrictSelect.js"
import TeamRadioContainer from "../containers/TeamRadioContainer.js"
import RoleSelect from "./RoleSelect.js"


class TeamPeopleForm extends Component {
	state = {
		teams: [],
		selectedTeam: null,
		selectedRole: ""
	}

	setTeams = teams => {
		this.setState({
			teams: teams
		})
	}

	setSelectedTeam = e => {
		this.setState({
			selectedTeam: e.target.value
		})
	}

	setRole = e => {
		this.setState({
			selectedRole: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.access_token
			},
			body: JSON.stringify({
				api_v1_team_person: {
					team_id: this.state.selectedTeam,
					person_id: this.props.personId
				}
			})
		}
		fetch(`http://localhost:3000/api/v1/team_people`, configObj)
			.then(resp => resp.json())
			.then(data => {
				this.setState({
				})
			})
	}

	render() {
		return (
			<form>
				<DistrictSelect setTeams={this.setTeams} />
				<TeamRadioContainer
					teams={this.state.teams}
					setSelectedTeam={this.setSelectedTeam}
					selectedTeam={this.state.selectedTeam}
				/>
				<RoleSelect setRole={this.setRole} selectedRole={this.state.selectedRole} />
			</form>
		)
	}
}

const mapStateToProps = state => {
	return {
		accessToken: state.user.user.access_token,
		id: state.user.user.person_id
	}
}

export default connect(mapStateToProps)(TeamPeopleForm)