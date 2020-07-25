import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { setEntities } from "../actions/entities.js"
import { fetchTeam } from "../actions/team.js"
import normalize from "json-api-normalizer"
import EventListContainer from "../containers/EventListContainer"

class TeamsShow extends Component {
	deleteTeam = () => {
		const configObj = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
		}

		fetch(
			"http://localhost:3000/api/v1/teams/" +
				this.props.match.params.teamId,
			configObj
		)
			.then((resp) => resp.json())
			.then((data) => {
				let normalizedData = normalize(data)
				this.props.history.push("/teams")
				this.props.setEntities(normalizedData)
			})
	}

	render() {
		const team = this.props.teams[this.props.match.params.teamId]
		const organization = team.attributes.organization
		const teamEvents = team.attributes.events.map((event) => {
			return this.props.events[event.id]
		})

		return (
			<>
				<div className="content">
					<h1 className="title is-1">{organization.name}</h1>
					<p className="subtitle">{team.attributes.season.year}</p>
				</div>
				<div className="content">
					<h2 className="title is-3">Team Events</h2>
					<EventListContainer events={teamEvents} />
				</div>
				<div className="content">
					<div className="buttons">
						<Link
							className="button is-link"
							to={`/teams/${team.id}/edit`}>
							<span className="icon is-large is-white">
								<i
									className="fas fa-pencil-alt fa-lg"
									aria-hidden="true"></i>
								<span className="is-sr-only">Pencil</span>
							</span>
							<span>Edit Team</span>
						</Link>
						<button
							className="button is-danger"
							onClick={this.deleteTeam}>
							<span className="icon is-large is-white">
								<i
									className="fas fa-trash-alt fa-lg"
									aria-hidden="true"></i>
								<span className="is-sr-only">Trash</span>
							</span>
							<span>Delete Team</span>
						</button>
					</div>
				</div>{" "}
			</>
		)
	}

	componentDidMount() {
		this.props.fetchTeam(this.props.match.params.teamId)
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.entities.event,
		teams: state.entities.team,
		organizations: state.entities.organization,
		accessToken: state.loggedInUser.accessToken,
	}
}

export default connect(mapStateToProps, { setEntities, fetchTeam })(TeamsShow)
