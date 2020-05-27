import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import ProfileIncompleteNotification from "../components/ProfileIncompleteNotification"
import TeamUnassignedNotification from "../components/TeamUnassignedNotification"
import NewEventLevel from "../components/NewEventLevel"
import EventsShow from "../components/EventsShow"
import EventsEdit from "../components/EventsEdit"
import normalize from "json-api-normalizer"
import { setEntities } from "../actions/entities.js"

class EventsPage extends Component {
	render() {
		return (
			<section className="section">
				{!!this.props.teamName ? null : <TeamUnassignedNotification />}

				{this.props.profileComplete ? null : (
					<ProfileIncompleteNotification />
				)}

				<NewEventLevel />

				<div className="container">
					<Route
						exact
						path={`${this.props.match.url}/:eventId`}
						component={EventsShow}
					/>

					<Route
						path={`${this.props.match.url}/:eventId/edit`}
						component={EventsEdit}
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
		fetch(`http://localhost:3000/api/v1/events`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)

				this.props.setEntities(normalizedData)
			})
	}
}

const mapStateToProps = (state) => {
	return {
		profileComplete: state.user.user.profile_complete,
		teamName: state.team.teamName,
		teamSeason: state.team.teamSeason,
		accessToken: state.user.user.access_token,
	}
}

export default connect(mapStateToProps, { setEntities })(EventsPage)
