import React, { Component } from "react"
import { connect } from "react-redux"
import TeamTable from "../containers/TeamTable"
import { fetchTeams } from "../actions/team.js"

class EventsForm extends Component {
	renderTeamOptions = () => {
		return Object.keys(this.props.teams).map((teamId) => {
			let teamName = this.props.teams[teamId].attributes.organization.name
			return (
				<option key={teamId} value={teamId}>
					{teamName}
				</option>
			)
		})
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<div className="field">
					<div className="control">
						<label htmlFor="name" className="label">
							Event Name
						</label>
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
						<label htmlFor="location" className="label">
							Location
						</label>
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
							<label htmlFor="datetime" className="label">
								Date/Time
							</label>
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
						<p className="label">Teams</p>
						<TeamTable
							eventTeams={this.props.selectedTeams}
							handleTeamRemove={this.props.handleTeamRemove}
						/>
						<label htmlFor="add-a-team" className="label">
							Add A Team
						</label>
						<div className="select">
							<select
								onChange={this.props.handleTeamInput}
								className="is-primary"
								name="add-a-team">
								<option disabled value={""}>
									Choose A Team
								</option>
								{this.renderTeamOptions()}
							</select>
						</div>
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
