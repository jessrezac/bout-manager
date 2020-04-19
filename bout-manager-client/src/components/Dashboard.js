import React, { Component } from "react";
import { connect } from 'react-redux'
import ProfileIncompleteNotification from './ProfileIncompleteNotification'
import TeamUnassignedNotification from "./TeamUnassignedNotification"

class Dashboard extends Component {
    render() {
        return (
			<section className="section">
				{!!this.props.team ? null : <TeamUnassignedNotification />}

				{this.props.profileComplete ? null : (
					<ProfileIncompleteNotification />
				)}
			</section>
		)
    }
}

const mapStateToProps = (state) => {
    return {
		profileComplete: state.user.user.profile_complete
	} 
}

export default connect(mapStateToProps)(Dashboard);
