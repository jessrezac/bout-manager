import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class NewEventLevel extends Component {
	render() {
		return (
			<div className="level">
				<div className="level-left">
					<div className="level-item"></div>
				</div>
				<div className="level-right">
					<div className="level-item">
						<Link to="/events/new" className="button is-primary">
							New Event
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.loggedInUser.accessToken,
		seasonId: state.loggedInUser.teamPerson.season_id,
	}
}

export default connect(mapStateToProps)(NewEventLevel)
