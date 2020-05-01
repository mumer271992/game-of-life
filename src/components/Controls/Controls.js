import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  clear,
  run,
  stop,
  totalIteration,
  interval,
  isRunning
}) => {
  return (
    <div className="controls">
      <div className="flex flex-row justify-between m-t m-b">
        <div>
          <span>Generations: </span>
          <span>{totalIteration}</span>
        </div>
        <div>
          <span>Interval: </span>
          <span>{interval}</span>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        {isRunning ? (
          <button className="button" onClick={stop}>
            Stop
          </button>
        ) : (
          <button className="button button-primary" onClick={run}>
            Run
          </button>
        )}
        <button className="button" onClick={clear}>
          Clear Board
        </button>
      </div>
    </div>
  );
};

Controls.propTypes = {
  clear: PropTypes.func,
  run: PropTypes.func,
  stop: PropTypes.func,
  totalIteration: PropTypes.number,
  interval: PropTypes.number,
  isRunning: PropTypes.bool
};

Controls.defaultProps = {
  clear: () => {},
  run: () => {},
  stop: () => {},
  totalIteration: 0,
  interval: 100,
  isRunning: false
};

export default Controls;
