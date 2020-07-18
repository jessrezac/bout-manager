import React, { Component } from "react"
import TeamRow from "../components/TeamRow"
import { Link } from "react-router-dom"

class TeamTable extends Component {
	renderTeams = () => {
		return Object.keys(this.props.teams).map((teamId) => {
			const teamObject = this.props.teams[teamId]
			return (
				<TeamRow
					key={teamId}
					teamId={teamId}
					teamName={teamObject.attributes.teamName}>
					<Link to={`/teams/${teamId}`} className="button is-info">
						<span className="icon is-large is-white">
							<i
								className="fas fa-eye fa-lg"
								aria-hidden="true"></i>
							<span className="is-sr-only">Eye</span>
						</span>
						<span>View</span>
					</Link>

					<Link
						to={`/organizations/${teamObject.attributes.organization.id}/edit`}
						className="button is-link">
						<span className="icon is-large is-white">
							<i
								className="fas fa-project-diagram fa-lg"
								aria-hidden="true"></i>
							<span className="is-sr-only">Diagram</span>
						</span>
						<span>Edit Organization</span>
					</Link>

					<button
						onClick={() => this.props.deleteTeam(teamId)}
						className="button is-danger">
						<span className="icon is-large is-white">
							<i
								className="fas fa-trash-alt fa-lg"
								aria-hidden="true"></i>
							<span className="is-sr-only">Trash</span>
						</span>
						<span>Delete</span>
					</button>
				</TeamRow>
			)
		})
	}

	render() {
		return (
			<table className="table is-hoverable">
				<tbody>{this.renderTeams()}</tbody>
			</table>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.loggedInUser.user.accessToken,
	}
}

export default TeamTable
