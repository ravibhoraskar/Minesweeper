import React from 'react';
import './App.css';

const MINE_CHAR = String.fromCodePoint(0x1f4a3); // BOMB
const WON_MINE_CHAR = String.fromCodePoint(0x1f3c6); // TROPHY
const UNOPENED_SQUARE_CHAR = String.fromCodePoint(0x2b1b); // BLACK BOX

const Cell = props => (
  <div>
    {props.youLost
      ? _renderLost(props)
      : props.youWon
        ? _renderWon(props)
        : _renderPlaying(props)}
  </div>
);

const _renderLost = props => {
  if (props.value === MINE_CHAR) {
    return MINE_CHAR;
  } else if (props.status) {
    return props.value;
  } else {
    return UNOPENED_SQUARE_CHAR;
  }
};

const _renderWon = props => {
  if (props.value === MINE_CHAR) {
    return WON_MINE_CHAR;
  } else {
    return props.value;
  }
};

const _renderPlaying = props => {
  if (props.status) {
    return props.value;
  } else {
    return UNOPENED_SQUARE_CHAR;
  }
};

export default Cell;
