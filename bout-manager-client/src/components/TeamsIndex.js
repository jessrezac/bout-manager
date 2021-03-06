import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchTeams, deleteTeam } from "../actions/team"
import TeamTable from "../containers/TeamTable"

class TeamsIndex extends Component {
	handleTeamDelete = (teamId) => {
		const configObj = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
		}

		fetch("http://localhost:3000/api/v1/teams/" + teamId, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				this.props.deleteTeam(data)
			})
	}

	render() {
		return (
			<section className="section">
				<div className="container">
					<h1 className="title is-1">Teams</h1>
					<TeamTable
						teams={this.props.teams}
						deleteTeam={this.handleTeamDelete}
					/>
				</div>
			</section>
		)
	}

	componentDidMount() {
		this.props.fetchTeams()
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.loggedInUser.accessToken,
		teams: state.entities.team,
	}
}

export default connect(mapStateToProps, { fetchTeams, deleteTeam })(TeamsIndex)
