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

	// TODO: state should be set to actual event details

	handleTeamInput = (selectedTeams) => {
		this.setState({ selectedTeams })
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
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
				teams: this.state.selectedTeams,
			}),
		}
		fetch(`http://localhost:3000/api/v1/events`, configObj)
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
			name: event.name,
			location: event.location,
			datetime: event.datetime,
			selectedTeams: event.teams,
		})
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.user.user.access_token,
		events: state.entities.event,
	}
}

export default connect(mapStateToProps, { setEntities })(EventsEdit)
