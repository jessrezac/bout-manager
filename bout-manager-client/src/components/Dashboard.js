import React, { Component } from "react"
import { connect } from "react-redux"
import ProfileIncompleteNotification from "./ProfileIncompleteNotification"
import TeamUnassignedNotification from "./TeamUnassignedNotification"
import NewEventLevel from "./NewEventLevel"
import EventListContainer from "../containers/EventListContainer"

class Dashboard extends Component {
	render() {
		return (
			<section className="section">
				{!!this.props.teamName ? null : <TeamUnassignedNotification />}

				{this.props.profileComplete ? null : (
					<ProfileIncompleteNotification />
				)}

				<NewEventLevel />

				<EventListContainer />
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		profileComplete: state.loggedInUser.user.profile_complete,
		teamName: state.team.teamName,
		teamSeason: state.team.teamSeason,
	}
}

export default connect(mapStateToProps)(Dashboard)
