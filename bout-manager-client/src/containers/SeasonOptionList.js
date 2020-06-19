import React, { Component } from "react"
import SeasonOption from "../components/SeasonOption"

class SeasonOptionList extends Component {
	renderSeasonList = () => {
		return this.props.seasons.map((season) => {
			return (
				<SeasonOption
					id={season.id}
					key={season.id}
					year={season.attributes.year}
				/>
			)
		})
	}

	render() {
		return (
			<div className="select">
				<select
					name="seasonId"
					id="seasonId"
					onChange={this.props.handleChange}>
					{this.renderSeasonList()}
				</select>
			</div>
		)
	}
}

export default SeasonOptionList
