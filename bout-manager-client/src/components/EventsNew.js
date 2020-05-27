import React, { Component } from "react"
import { connect } from "react-redux"
import { setEntities } from "../actions/entities"
import EventsForm from "./EventsForm"

import normalize from "json-api-normalizer"

import "react-tagsinput/react-tagsinput.css"

class EventsNew extends Component {
	state = {
		name: "",
		location: "",
		datetime: null,
		selectedTeams: [],
	}

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
			method: "POST",
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
				season_id: this.props.seasonId,
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
					<h1 className="title is-1">Add An Event</h1>
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
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.user.user.access_token,
		seasonId: state.team.team.season_id,
	}
}

export default connect(mapStateToProps, { setEntities })(EventsNew)
