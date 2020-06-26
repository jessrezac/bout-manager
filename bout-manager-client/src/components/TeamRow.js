import React, { Component } from "react"

class TeamRow extends Component {
	render() {
		let { teamName, children } = this.props

		return (
			<tr>
				<td>{teamName}</td>
				<td>
					<div className="buttons">{children}</div>
				</td>
			</tr>
		)
	}
}

export default TeamRow
