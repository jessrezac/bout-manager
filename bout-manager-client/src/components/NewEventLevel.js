import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewEventLevel extends Component {

    handleClick = () => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + this.props.accessToken,
            },
            body: JSON.stringify({
                season_id: this.props.seasonId
            }),
        }
        fetch(
            `http://localhost:3000/api/v1/events`,
            configObj
        )
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })

    }

    render() {
        return (
            <div className="level">
                <div className="level-left">
                    <div className="level-item"></div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <button className="button" onClick={this.handleClick}>New Event</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accessToken: state.user.user.access_token,
        seasonId: state.team.team.season_id
    }
}

export default connect(mapStateToProps)(NewEventLevel)