import React, { Component } from "react"
import { Link } from "react-router-dom"

class EventRow extends Component {
	render() {
		const date = new Date(this.props.datetime)

		return (
			<tr>
				<td>
					<Link to={`/events/${this.props.id}`}>
						{this.props.name || "Event"}
					</Link>
				</td>
				<td>{this.props.location || "No Location"}</td>
				<td>{new Intl.DateTimeFormat("en-US").format(date)}</td>
				<td>
					<div className="buttons">
						<Link
							to={`/events/${this.props.id}`}
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
							to={`/events/${this.props.id}/edit`}
							className="button is-warning">
							<span className="icon is-large is-white">
								<i
									className="fas fa-pencil-alt fa-lg"
									aria-hidden="true"></i>
								<span className="is-sr-only">Pencil</span>
							</span>
							<span>Edit</span>
						</Link>
					</div>
				</td>
			</tr>
		)
	}
}

export default EventRow
