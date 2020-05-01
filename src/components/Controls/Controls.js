import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ clear, run, stop, totalIteration, interval }) => {
  return (
    <div className="controls">
      <div>
        <span>Generations: </span>
        <span>{totalIteration}</span>
      </div>
      <div>
        <span>Interval: </span>
        <span>{interval}</span>
      </div>
      <button className="button" onClick={run}>
        Run
      </button>
      <button className="button" onClick={stop}>
        Stop
      </button>
      <button className="button" onClick={clear}>
        Clear Board
      </button>
    </div>
  );
};

Controls.propTypes = {
  clear: PropTypes.func,
  run: PropTypes.func,
  stop: PropTypes.func,
  totalIteration: PropTypes.number,
  interval: PropTypes.number
};

Controls.defaultProps = {
  clear: () => {},
  run: () => {},
  stop: () => {},
  totalIteration: 0,
  interval: 100
};

export default Controls;
