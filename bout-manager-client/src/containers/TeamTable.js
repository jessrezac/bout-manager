import React, { Component } from "react"
import TeamRow from "../components/TeamRow"
import { connect } from "react-redux"
import { setEntities } from "../actions/entities"
import normalize from "json-api-normalizer"

class TeamList extends Component {
	removeTeam = (id) => {
		// Create array of teams that contains only id
		let updatedTeams = []

		for (let i = 0; i < this.props.eventTeams.length; i++) {
			if (this.props.eventTeams[i].id !== id) {
				updatedTeams.push(this.props.eventTeams[i].id)
			}
		}

		const configObj = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
			body: JSON.stringify({
				teams: updatedTeams,
				event: {
					id: this.props.eventId,
				},
			}),
		}
		fetch(
			"http://localhost:3000/api/v1/events/" + this.props.eventId,
			configObj
		)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)

				this.props.setEntities(normalizedData)
			})
	}

	renderTeams = () => {
		return this.props.eventTeams.map((team) => {
			const teamObject = this.props.teams[team.id]
			return (
				<TeamRow
					key={team.id}
					teamId={team.id}
					teamName={teamObject.attributes.teamName}
					removeTeam={this.removeTeam}
				/>
			)
		})
	}

	render() {
		return (
			<table className="table is-hoverable">
				<tbody>{this.renderTeams(this.props.eventTeams)}</tbody>
			</table>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		teams: state.entities.team,
		accessToken: state.user.user.access_token,
	}
}

export default connect(mapStateToProps, { setEntities })(TeamList)
