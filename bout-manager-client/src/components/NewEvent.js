import React, { Component } from "react"
import { connect } from "react-redux"
import TagsInput from 'react-tagsinput'

import "react-tagsinput/react-tagsinput.css"

class NewEvent extends Component {

    state = {
        name: "", 
        location: "",
		datetime: null,
		tags: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
	}
	
	handleTeamInput = tags => {
		this.setState({tags})
	}

	handleSubmit = e => {
        e.preventDefault()
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
			body: JSON.stringify({
				season_id: this.props.seasonId,
			}),
		}
		fetch(`http://localhost:3000/api/v1/events`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data)
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
								<TagsInput
									value={this.state.tags}
									onChange={this.handleTeamInput}
									className="input is-primary"
									inputProps={{
										className:
											"react-tagsinput-input",
										placeholder: "Test",
										list: "browsers",
									}}
									tagProps={{
										className: "react-tagsinput-tag tag is-link is-medium",
										classNameRemove:
											"react-tagsinput-remove delete",
									}}
								/>

								<datalist id="browsers">
									<option value="Internet Explorer" />
									<option value="Firefox" />
									<option value="Chrome" />
									<option value="Opera" />
									<option value="Safari" />
								</datalist>
							</div>
						</div>
					</form>
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
				Authorization: "Bearer " + this.props.access_token
			}
		}
		
		fetch(
			`http://localhost:3000/api/v1/districts/${this.props.district}/active_teams`,
			configObj
		)
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					teams: data.data
				})
			})
		
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.user.user.access_token,
		seasonId: state.team.team.season_id,
	}
}

export default connect(mapStateToProps)(NewEvent)
