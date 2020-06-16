import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { setEntities } from "../actions/entities.js"
import normalize from "json-api-normalizer"
import TeamTable from "../containers/TeamTable"

class EventsShow extends Component {
	handleTeamRemove = (id) => {
		// Create array of teams that contains only id
		const event = this.props.events[this.props.match.params.eventId]
		const eventTeams = event.attributes.teams
		let updatedTeams = []

		for (let i = 0; i < eventTeams.length; i++) {
			if (eventTeams[i].id !== id) {
				updatedTeams.push(eventTeams[i].id)
			}
		}

		const configObj = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
			body: JSON.stringify({
				teams: updatedTeams,
				event: {
					id: event.id,
				},
			}),
		}
		fetch("http://localhost:3000/api/v1/events/" + event.id, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)

				this.props.setEntities(normalizedData)
			})
	}

	deleteEvent = () => {
		const configObj = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
		}

		fetch(
			"http://localhost:3000/api/v1/events/" +
				this.props.match.params.eventId,
			configObj
		)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)
				this.props.history.push("/events")
				this.props.setEntities(normalizedData)
			})
	}

	render() {
		const event = this.props.events[this.props.match.params.eventId]
		const date = new Date(event.attributes.datetime)

		return (
			<>
				<div className="content">
					<h1 className="title is-1">{event.attributes.name}</h1>
					<p className="content">
						{event.attributes.location}
						&nbsp;&bull;&nbsp;
						{new Intl.DateTimeFormat("en-US").format(date)}
					</p>
				</div>

				<div className="content">
					<h2 className="title is-3">Teams</h2>
					<TeamTable
						eventTeams={event.attributes.teams}
						eventId={event.id}
						handleTeamRemove={this.handleTeamRemove}
					/>
				</div>

				<div className="content">
					<div className="buttons">
						<Link
							className="button is-link"
							to={`/events/${event.id}/edit`}>
							<span className="icon is-large is-white">
								<i
									className="fas fa-pencil-alt fa-lg"
									aria-hidden="true"></i>
								<span className="is-sr-only">Pencil</span>
							</span>
							<span>Edit Event</span>
						</Link>
						<button
							className="button is-danger"
							onClick={this.deleteEvent}>
							<span className="icon is-large is-white">
								<i
									className="fas fa-trash-alt fa-lg"
									aria-hidden="true"></i>
								<span className="is-sr-only">Trash</span>
							</span>
							<span>Delete Event</span>
						</button>
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.entities.event,
		teams: state.entities.team,
		accessToken: state.user.user.access_token,
	}
}

export default connect(mapStateToProps, { setEntities })(EventsShow)
