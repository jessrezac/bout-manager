import React, { Component } from "react"
import { Link } from "react-router-dom"

class TeamRow extends Component {
	render() {
		let { teamId, teamName, removeTeam } = this.props

		return (
			<tr>
				<td>{teamName}</td>
				<td>
					<div className="buttons">
						<Link
							to={`/teams/${teamId}`}
							className="button is-info">
							<span className="icon is-large is-white">
								<i
									className="fas fa-eye fa-lg"
									aria-hidden="true"></i>
								<span className="is-sr-only">Eye</span>
							</span>
							<span>View</span>
						</Link>

						<Link
							to={`/teams/${teamId}/edit`}
							className="button is-link">
							<span className="icon is-large is-white">
								<i
									className="fas fa-pencil-alt fa-lg"
									aria-hidden="true"></i>
								<span className="is-sr-only">Pencil</span>
							</span>
							<span>Edit</span>
						</Link>

						<button
							onClick={() => removeTeam(teamId)}
							className="button is-danger">
							<span className="icon is-large is-white">
								<i
									className="fas fa-minus-circle fa-lg"
									aria-hidden="true"></i>
								<span className="is-sr-only">Minus</span>
							</span>
							<span>Remove</span>
						</button>
					</div>
				</td>
			</tr>
		)
	}
}

export default TeamRow
