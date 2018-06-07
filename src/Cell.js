import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    return (
      <ReactCSSTransitionGroup transitionName="bomb" transitionAppear={true}>
        <div>{constants.MINE_CHAR}</div>
      </ReactCSSTransitionGroup>
    );
  } else if (props.status) {
    return props.value;
  } else {
    return <UnopenedCell {...props} />;
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
    return <UnopenedCell {...props} />;
  }
};

const UnopenedCell = props => (
  <div className={props.youWon || props.youLost ? '' : 'active-cell'}>
    {constants.UNOPENED_SQUARE_CHAR}
  </div>
);

export default Cell;
