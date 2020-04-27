import React, { Component } from "react"
import { connect } from "react-redux"
import TagsInput from 'react-tagsinput'
import { fetchTeams } from '../actions/team.js'

import "react-tagsinput/react-tagsinput.css"

class NewEvent extends Component {

    state = {
        name: "", 
        location: "",
		datetime: null,
		teams: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
	}
	
	handleTeamInput = teams => {
		this.setState({teams})
	}

	handleSubmit = e => {
        e.preventDefault()
		const configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
			body: JSON.stringify(
				this.state
			),
		}
		fetch(`http://localhost:3000/api/v1/events`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data)
			})
	}

	renderTeamOptions = () => {
		return this.props.teams.map(team => {
			return (
				<option key={team.id} value={team.attributes.organization.name}>
					{team.attributes.organization.name}
				</option>
			)
		})
	}

	render() {
		
		return (
			<section className="section">
				<div className="container">
					<h1 className="title is-1">Add An Event</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="field">
							<div className="control">
								<label htmlFor="name">Event Name</label>
								<input
									type="text"
									className="input is-primary"
									placeholder="Event Name"
									name="name"
									onChange={this.handleChange}
									value={this.state.name}
								/>
							</div>
						</div>
						<div className="field is-grouped">
							<div className="control">
								<label htmlFor="location">Location</label>
								<input
									type="text"
									className="input is-primary"
									placeholder="Location"
									name="location"
									onChange={this.handleChange}
									value={this.state.location}
								/>
							</div>
							<div className="control">
								<div className="control">
									<label htmlFor="datetime">Date/Time</label>
									<input
										type="datetime-local"
										className="input is-primary"
										placeholder="Date/Time"
										name="datetime"
										onChange={this.handleChange}
										value={this.state.dateTime}
									/>
								</div>
							</div>
						</div>
						<div className="field">
							<div className="control">
								<label htmlFor="teams">Teams</label>
								<TagsInput
									value={this.state.teams}
									onChange={this.handleTeamInput}
									className="input is-primary"
									inputProps={{
										className:
											"react-tagsinput-input",
										placeholder: "Add Teams",
										list: "teams",
										name: "teams"
									}}
									tagProps={{
										className: "react-tagsinput-tag tag is-link is-medium",
										classNameRemove:
											"react-tagsinput-remove delete",
									}}
								/>

								<datalist id="teams">
									{this.renderTeamOptions()}
								</datalist>
							</div>
						</div>
						<div class="field">
							<div class="control">
								<button class="button is-primary">Submit</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		)
	}

	componentDidMount() {
		this.props.fetchTeams()	
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.user.user.access_token,
		seasonId: state.team.team.season_id,
		teams: state.teams.teams
	}
}

export default connect(mapStateToProps, { fetchTeams })(NewEvent)
