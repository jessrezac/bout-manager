import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchEvents } from "../actions/entities.js"
import EventListContainer from "../containers/EventListContainer"

class EventsIndex extends Component {
	render() {
		return (
			<section className="section">
				<div className="container">
					<h1 className="title is-1">Events</h1>
					<EventListContainer events={this.props.events} />
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
		seasonId: state.loggedInUser.teamPerson.season_id,
		accessToken: state.loggedInUser.accessToken,
		events: state.entities.event,
	}
}

export default connect(mapStateToProps, { fetchEvents })(EventsIndex)
