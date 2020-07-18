import React, { Component } from "react"
import { connect } from "react-redux"
import EventRow from "../components/EventRow"
import { fetchEvents } from "../actions/entities.js"

class EventListContainer extends Component {
	renderEvents = () => {
		return Object.keys(this.props.events).map((eventId) => {
			return (
				<EventRow
					key={eventId}
					id={eventId}
					{...this.props.events[eventId].attributes}
				/>
			)
		})
	}

	render() {
		return (
			<section className="section">
				<div className="container">
					<h1 className="title is-1">Events</h1>
					<table className="table is-fullwidth is-striped">
						<thead>
							<tr>
								<th>Name</th>
								<th>Location</th>
								<th>Date</th>
								<th>Options</th>
							</tr>
						</thead>
						<tbody>{this.renderEvents()}</tbody>
					</table>
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
		seasonId: state.team.team.season_id,
		accessToken: state.loggedInUser.accessToken,
		events: state.entities.event,
	}
}

export default connect(mapStateToProps, { fetchEvents })(EventListContainer)
