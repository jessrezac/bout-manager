import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class EventListContainer extends Component {
	renderEvents = () => {
		return Object.keys(this.props.events).map((eventId) => {
			return (
				<li key={eventId}>
					<Link to={`/events/${eventId}`}>
						{this.props.events[eventId].attributes.name || "Event"}
						&nbsp;&bull;&nbsp;
						{this.props.events[eventId].attributes.location ||
							"No Location"}
					</Link>
				</li>
			)
		})
	}

	render() {
		return <div className="container">{this.renderEvents()}</div>
	}
}

const mapStateToProps = (state) => {
	return {
		seasonId: state.team.team.season_id,
		accessToken: state.user.user.access_token,
		events: state.entities.event,
	}
}

export default connect(mapStateToProps)(EventListContainer)
