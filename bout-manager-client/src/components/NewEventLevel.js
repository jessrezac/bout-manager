import React, { Component } from 'react'

class NewEventLevel extends Component {

    render() {
        return (
            <div className="level">
                <div className="level-left">
                    <div className="level-item"></div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <button className="button">New Event</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewEventLevel