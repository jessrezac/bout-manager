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

	handleTeamInput = (teamInputEvent) => {
		const selectedTeam = this.props.teams[teamInputEvent.target.value]
		if (!!selectedTeam) {
			if (
				this.state.selectedTeams.filter(
					(team) =>
						Number(team.id) === Number(teamInputEvent.target.value)
				).length === 0
			) {
				const newTeams = this.state.selectedTeams.concat(selectedTeam)
				this.setState({
					selectedTeams: newTeams,
				})
			}
		}
	}

	handleTeamRemove = (teamId) => {
		let newTeams = this.state.selectedTeams.filter(
			(team) => Number(team.id) !== Number(teamId)
		)
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
						handleTeamRemove={this.handleTeamRemove}
						{...this.state}
					/>
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.loggedInUser.user.accessToken,
		seasonId: state.team.team.season_id,
		teams: state.entities.team,
	}
}

export default connect(mapStateToProps, { setEntities })(EventsNew)
