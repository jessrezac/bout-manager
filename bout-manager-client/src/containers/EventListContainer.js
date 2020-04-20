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
		fetch(`http://localhost:3000/api/v1/season/${this.props.seasonId}/events`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				this.setState({
                    events: data.events
				})
			})

    }
}

const mapStateToProps = state => {
    return {
        seasonId: state.team.team.season_id
    }
}

export default connect(mapStateToProps)(EventListContainer)