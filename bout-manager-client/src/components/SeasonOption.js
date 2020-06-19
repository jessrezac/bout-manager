import React, { Component } from "react"

class SeasonOption extends Component {
	render() {
		return (
			<option value={this.props.id} key={this.props.id}>
				{this.props.year}
			</option>
		)
	}
}

export default SeasonOption
