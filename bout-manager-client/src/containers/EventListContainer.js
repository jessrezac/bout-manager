import React, { Component } from "react"
import EventRow from "../components/EventRow"

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
		)
	}
}

export default EventListContainer
