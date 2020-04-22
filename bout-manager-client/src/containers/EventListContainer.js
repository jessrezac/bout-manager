import React, { Component } from 'react'
import { connect } from 'react-redux'

class EventListContainer extends Component {

    state = {
        events: []
    }

    render () {
        return (
            <div className="container">
                A list of events
            </div>
        )
    }

    componentDidMount() {

		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
		}
		fetch(`http://localhost:3000/api/v1/events`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data)
			})

    }
}

const mapStateToProps = state => {
    return {
		seasonId: state.team.team.season_id,
		accessToken: state.user.user.access_token
	}
}

export default connect(mapStateToProps)(EventListContainer)