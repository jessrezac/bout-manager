import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { setEntities } from "../actions/entities.js"
import normalize from "json-api-normalizer"

class EventsShow extends Component {
	removeTeam = (teams, id) => {
		// Create array of teams that excludes id
		let updatedTeams = []

		for (let i = 0; i < teams.length; i++) {
			if (teams[i].id !== id) {
				updatedTeams.push(teams[i].id)
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
					id: this.props.match.params.eventId,
				},
			}),
		}
		fetch(
			"http://localhost:3000/api/v1/events/" +
				this.props.match.params.eventId,
			configObj
		)
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

	renderTeams = (teams) => {
		return teams.map((team) => {
			const teamObject = this.props.teams[team.id]
			return (
				<tr key={team.id}>
					<td>{teamObject.attributes.teamName}</td>
					<td>
						<div className="buttons">
							<Link
								to={`/teams/${team.id}`}
								className="button is-info">
								<span className="icon is-large is-white">
									<i
										className="fas fa-eye fa-lg"
										aria-hidden="true"></i>
									<span className="is-sr-only">Eye</span>
								</span>
								<span>View</span>
							</Link>

							<Link
								to={`/teams/${team.id}/edit`}
								className="button is-warning">
								<span className="icon is-large is-white">
									<i
										className="fas fa-pencil-alt fa-lg"
										aria-hidden="true"></i>
									<span className="is-sr-only">Pencil</span>
								</span>
								<span>Edit</span>
							</Link>

							<button
								onClick={() => this.removeTeam(teams, team.id)}
								className="button is-danger">
								<span className="icon is-large is-white">
									<i
										className="fas fa-minus-circle fa-lg"
										aria-hidden="true"></i>
									<span className="is-sr-only">Minus</span>
								</span>
								<span>Remove</span>
							</button>
						</div>
					</td>
				</tr>
			)
		})
	}

	render() {
		const event = this.props.events[this.props.match.params.eventId]
		const date = new Date(event.attributes.datetime)

		return (
			<div>
				<h1 className="title">{event.attributes.name}</h1>
				<h2 className="subtitle">
					{event.attributes.location}
					&nbsp;&bull;&nbsp;
					{new Intl.DateTimeFormat("en-US").format(date)}
				</h2>

				<h2 className="subtitle">Teams</h2>
				<table className="table is-hoverable">
					<tbody>{this.renderTeams(event.attributes.teams)}</tbody>
				</table>

				<div className="buttons">
					<button
						className="button is-warning"
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
