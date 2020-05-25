import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import ProfileIncompleteNotification from "../components/ProfileIncompleteNotification"
import TeamUnassignedNotification from "../components/TeamUnassignedNotification"
import NewEventLevel from "../components/NewEventLevel"
import EventListContainer from "./EventListContainer"
import EventsShow from "../components/EventsShow"

class Dashboard extends Component {
	render() {
		return (
			<section className="section">
				{!!this.props.teamName ? null : <TeamUnassignedNotification />}

				{this.props.profileComplete ? null : (
					<ProfileIncompleteNotification />
				)}

				<NewEventLevel />

				<div className="columns">
					<div className="column is-one-quarter">
						<EventListContainer />
					</div>
					<div className="column">
						<Route
							path={`${this.props.match.url}/:eventId`}
							component={EventsShow}
						/>
					</div>
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		profileComplete: state.user.user.profile_complete,
		teamName: state.team.teamName,
		teamSeason: state.team.teamSeason,
	}
}

export default connect(mapStateToProps)(Dashboard)
