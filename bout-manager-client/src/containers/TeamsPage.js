import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import NewTeamLevel from "../components/NewTeamLevel"
import TeamsShow from "../components/TeamsShow"
import TeamsEdit from "../components/TeamsEdit"
import { fetchTeams } from "../actions/team.js"

class TeamsPage extends Component {
	render() {
		return (
			<section className="section">
				<NewTeamLevel />

				<div className="container">
					<Route
						exact
						path={`${this.props.match.url}/:teamId`}
						component={TeamsShow}
					/>

					<Route
						path={`${this.props.match.url}/:teamId/edit`}
						component={TeamsEdit}
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
		profileComplete: state.loggedInUser.profileComplete,
	}
}

export default connect(mapStateToProps, { fetchTeams })(TeamsPage)
