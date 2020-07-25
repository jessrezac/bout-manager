import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import NewTeamLevel from "../components/NewTeamLevel"
import TeamsShow from "../components/TeamsShow"
import TeamsEdit from "../components/TeamsEdit"
import normalize from "json-api-normalizer"
import { setEntities } from "../actions/entities.js"

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
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
		}
		fetch(`http://localhost:3000/api/v1/Teams`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)
				this.props.setEntities(normalizedData)
			})
			.catch((err) => {
				// ignore errors
			})
	}
}

const mapStateToProps = (state) => {
	return {
		profileComplete: state.loggedInUser.profileComplete,
		teamPersonId: state.loggedInUser.teamPerson.id,
		teamSeasonId: state.loggedInUser.teamPerson.season_id,
		accessToken: state.loggedInUser.accessToken,
	}
}

export default connect(mapStateToProps, { setEntities })(TeamsPage)
