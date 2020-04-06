import React, { Component } from 'react'

class TeamRadio extends Component {

    render() {
        return (
			<div className="field">
				<input
					className="is-checkradio is-medium"
					id={this.props.id}
					type="radio"
					name="team"
					value={this.props.id}></input>
				<label htmlFor={this.props.id}>
					{this.props.name} {this.props.orgType}
				</label>
			</div>
		)
    }

}

export default TeamRadio