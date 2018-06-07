import React from 'react';
import './App.css';
import constants from './constants.js';

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
  if (props.value === constants.MINE_CHAR) {
    return constants.MINE_CHAR;
  } else if (props.status) {
    return props.value;
  } else {
    return constants.UNOPENED_SQUARE_CHAR;
  }
};

const _renderWon = props => {
  if (props.value === constants.MINE_CHAR) {
    return constants.WON_MINE_CHAR;
  } else {
    return props.value;
  }
};

const _renderPlaying = props => {
  if (props.status) {
    return props.value;
  } else {
    return constants.UNOPENED_SQUARE_CHAR;
  }
};

export default Cell;
