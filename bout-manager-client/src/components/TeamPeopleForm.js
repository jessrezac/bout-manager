import React, { Component } from "react"
import { connect } from "react-redux"
import DistrictSelect from "./DistrictSelect.js"
import TeamRadioContainer from "../containers/TeamRadioContainer.js"
import RoleSelect from "./RoleSelect.js"
import { setTeam } from "../actions/teamPerson"

class TeamPeopleForm extends Component {
	state = {
		teams: [],
		selectedTeam: "",
		selectedRole: "",
	}

	setTeams = (teams) => {
		this.setState({
			teams: teams,
		})
	}

	handleSelectChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
			body: JSON.stringify({
				api_v1_team_person: {
					team_id: this.state.selectedTeam,
					person_id: this.props.id,
					role: this.state.selectedRole,
				},
			}),
		}
		fetch(`http://localhost:3000/api/v1/team_people`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				this.props.setTeam(data.data.attributes)
			})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<DistrictSelect setTeams={this.setTeams} />
				<TeamRadioContainer
					teams={this.state.teams}
					setSelectedTeam={this.handleSelectChange}
					selectedTeam={this.state.selectedTeam}
				/>
				<RoleSelect
					setRole={this.handleSelectChange}
					selectedRole={this.state.selectedRole}
				/>
				<button type="submit" className="button">
					Submit
				</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.user.user.access_token,
		id: state.user.user.person_id,
	}
}

export default connect(mapStateToProps, { setTeam })(TeamPeopleForm)
