import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import ProfileIncompleteNotification from "../components/ProfileIncompleteNotification"
import TeamUnassignedNotification from "../components/TeamUnassignedNotification"
import EventsShow from "../components/EventsShow"
import EventsEdit from "../components/EventsEdit"
import { fetchEvents } from "../actions/entities.js"

class EventsPage extends Component {
	render() {
		return (
			<section className="section">
				{!!this.props.teamPersonId ? null : (
					<TeamUnassignedNotification />
				)}

				{this.props.profileComplete ? null : (
					<ProfileIncompleteNotification />
				)}

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
		this.props.fetchEvents()
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

export default connect(mapStateToProps, { fetchEvents })(EventsPage)
