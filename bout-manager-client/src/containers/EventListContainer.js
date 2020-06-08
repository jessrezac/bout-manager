import React, { Component } from "react"
import { connect } from "react-redux"
import EventRow from "../components/EventRow"
import normalize from "json-api-normalizer"
import { setEntities } from "../actions/entities.js"

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
				console.log(normalizedData)
				this.props.setEntities(normalizedData)
			})
	}
}

const mapStateToProps = (state) => {
	return {
		seasonId: state.team.team.season_id,
		accessToken: state.user.user.access_token,
		events: state.entities.event,
	}
}

export default connect(mapStateToProps, { setEntities })(EventListContainer)
