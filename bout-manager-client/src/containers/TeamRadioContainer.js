import React, { PureComponent } from 'react'
import TeamRadio from '../components/TeamRadio'

class TeamRadioContainer extends PureComponent {

	state = {
		selectedTeam: null
	}

	renderTeamRadios = () => {
		return this.props.teams.map(team => {
			return (
				<TeamRadio
					id={team.id}
					name={
						team.attributes.organization
							.name
					}
					orgType={
						team.attributes.organization
							.org_type
					}
				/>
			)
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
		fetch(
			`http://localhost:3000/api/v1/team_people`,
			configObj
		)
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					firstName: data.first_name || "",
					lastName: data.last_name || "",
					phone: data.phone || "",
					email: data.email || "",
					snapchat: data.snapchat || "",
					instagram: data.instagram || ""
				})
			})

	}

    render() {
        return (
			<section className="section">
				<div className="container">
					<h2 className="title is-2">Select Your Team</h2>
					<form onSubmit={this.handleSubmit}>
						{this.props.teams.length > 0
							? this.renderTeamRadios()
							: <p className="content">Choose a district to load active teams.</p>}
					</form>
				</div>
			</section>
		)
    }
}

export default TeamRadioContainer