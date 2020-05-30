import React, { Component } from "react"
import { connect } from "react-redux"
import { setEntities } from "../actions/entities"
import EventsForm from "./EventsForm"

import normalize from "json-api-normalizer"

class EventsEdit extends Component {
	state = {
		name: "",
		location: "",
		datetime: null,
		selectedTeams: [],
	}

	handleTeamInput = (teamInputEvent) => {
		const selectedTeam = this.props.teams[teamInputEvent.target.value]
		const newTeams = this.state.selectedTeams.concat(selectedTeam)

		this.setState({
			selectedTeams: newTeams,
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		let teams = Object.keys(this.state.selectedTeams).map((team) => {
			return this.state.selectedTeams[team].id
		})
		const configObj = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
			body: JSON.stringify({
				name: this.state.name,
				location: this.state.location,
				datetime: this.state.datetime,
				teams: teams,
			}),
		}
		fetch(
			`http://localhost:3000/api/v1/events/${this.props.match.params.eventId}`,
			configObj
		)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)
				this.props.setEntities(normalizedData)
			})
	}

	render() {
		return (
			<section className="section">
				<div className="container">
					<h1 className="title is-1">Update Event</h1>
					<EventsForm
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
						handleTeamInput={this.handleTeamInput}
						{...this.state}
					/>
				</div>
			</section>
		)
	}

	componentDidMount() {
		const event = this.props.events[this.props.match.params.eventId]
		this.setState({
			name: event.attributes.name,
			location: event.attributes.location,
			datetime: event.attributes.datetime,
			selectedTeams: event.attributes.teams,
		})
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.user.user.access_token,
		events: state.entities.event,
		teams: state.entities.team,
	}
}

export default connect(mapStateToProps, { setEntities })(EventsEdit)
