import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const MINE_CHAR = String.fromCodePoint(0x1f4a3);
const WON_MINE_CHAR = String.fromCodePoint(0x1f3c6);
const UNOPENED_SQUARE_CHAR = String.fromCodePoint(0x2b1b);

class Cell extends Component {
	render() {
		return (
			<div>
				{this.props.youLost
					? this._renderLost()
					: this.props.youWon
						? this._renderWon()
						: this._renderPlaying()}
			</div>
		);
	}

	_renderLost() {
		if (this.props.value == MINE_CHAR) {
			return MINE_CHAR;
		} else if (this.props.status) {
			return this.props.value;
		} else {
			return UNOPENED_SQUARE_CHAR;
		}
	}

	_renderWon() {
		if (this.props.value == MINE_CHAR) {
			return WON_MINE_CHAR;
		} else {
			return this.props.value;
		}
	}

	_renderPlaying() {
		if (this.props.status) {
			return this.props.value;
		} else {
			return UNOPENED_SQUARE_CHAR;
		}
	}
}
export default Cell;
