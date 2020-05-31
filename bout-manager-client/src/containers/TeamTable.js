import React, { Component } from "react"
import TeamRow from "../components/TeamRow"
import { connect } from "react-redux"
import { setEntities } from "../actions/entities"

class TeamList extends Component {
	renderTeams = () => {
		return this.props.eventTeams.map((team) => {
			const teamObject = this.props.teams[team.id]
			return (
				<TeamRow
					key={team.id}
					teamId={team.id}
					teamName={teamObject.attributes.teamName}
					handleTeamRemove={this.props.handleTeamRemove}
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
