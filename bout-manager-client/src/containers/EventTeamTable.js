import React, { Component } from "react"
import TeamRow from "../components/TeamRow"
import { connect } from "react-redux"
import { setEntities } from "../actions/entities"
import { Link } from "react-router-dom"

class EventTeamTable extends Component {
	renderTeams = () => {
		return this.props.eventTeams.map((team) => {
			const teamObject = this.props.teams[team.id]
			return (
				<TeamRow
					key={team.id}
					teamId={team.id}
					teamName={teamObject.attributes.teamName}>
					<Link to={`/teams/${team.id}`} className="button is-info">
						<span className="icon is-large is-white">
							<i
								className="fas fa-eye fa-lg"
								aria-hidden="true"></i>
							<span className="is-sr-only">Eye</span>
						</span>
						<span>View</span>
					</Link>

					<Link
						to={`/teams/${team.id}/edit`}
						className="button is-link">
						<span className="icon is-large is-white">
							<i
								className="fas fa-pencil-alt fa-lg"
								aria-hidden="true"></i>
							<span className="is-sr-only">Pencil</span>
						</span>
						<span>Edit</span>
					</Link>

					<button
						onClick={() => this.props.handleTeamRemove(team.id)}
						className="button is-danger">
						<span className="icon is-large is-white">
							<i
								className="fas fa-minus-circle fa-lg"
								aria-hidden="true"></i>
							<span className="is-sr-only">Minus</span>
						</span>
						<span>Remove</span>
					</button>
				</TeamRow>
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

export default connect(mapStateToProps, { setEntities })(EventTeamTable)
