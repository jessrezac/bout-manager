import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchTeams } from "../actions/team"
import TeamTable from "../containers/EventTeamTable"

class TeamsIndex extends Component {
	render() {
		return (
			<section className="section">
				<div className="container">
					<h1 className="title is-1">Teams</h1>
					<TeamTable
						eventTeams={this.props.teams}
						eventId={event.id}
						handleTeamRemove={this.handleTeamRemove}
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
		teams: state.entities.team,
	}
}

export default connect(mapStateToProps, { fetchTeams })(TeamsIndex)
