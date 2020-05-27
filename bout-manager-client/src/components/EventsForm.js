import React, { Component } from "react"
import { connect } from "react-redux"
import TagsInput from "react-tagsinput"
import { fetchTeams } from "../actions/team.js"

class EventsForm extends Component {
	renderTeamOptions = () => {
		return Object.keys(this.props.teams).map((teamId) => {
			return (
				<option
					key={teamId}
					value={
						this.props.teams[teamId].attributes.organization.name
					}>
					{this.props.teams[teamId].attributes.organization.name}
				</option>
			)
		})
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<div className="field">
					<div className="control">
						<label htmlFor="name">Event Name</label>
						<input
							type="text"
							className="input is-primary"
							placeholder="Event Name"
							name="name"
							onChange={this.props.handleChange}
							value={this.props.name}
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
							onChange={this.props.handleChange}
							value={this.props.location}
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
								onChange={this.props.handleChange}
								value={this.props.dateTime}
							/>
						</div>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<label htmlFor="teams">Teams</label>
						<TagsInput
							value={this.props.selectedTeams}
							onChange={this.props.handleTeamInput}
							className="input is-primary"
							inputProps={{
								className: "react-tagsinput-input",
								placeholder: "Add Teams",
								list: "teams",
								name: "teams",
							}}
							tagProps={{
								className:
									"react-tagsinput-tag tag is-link is-medium",
								classNameRemove:
									"react-tagsinput-remove delete",
							}}
						/>

						<datalist id="teams">
							{this.renderTeamOptions()}
						</datalist>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<button className="button is-primary">Submit</button>
					</div>
				</div>
			</form>
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
		teams: state.entities.team,
	}
}

export default connect(mapStateToProps, { fetchTeams })(EventsForm)
