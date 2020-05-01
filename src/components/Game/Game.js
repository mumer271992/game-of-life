import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './Game.css';
import Board from '../Board/Board';

const Game = ({ rows, cols, board, cells, interval, isRunning, totalIteration }) => {
  const boardRef = useRef();

  return (
    <div className="game">
      <Board
        ref={n => {
          boardRef.current = n;
        }}
      />
    </div>
  );
};

Game.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  cells: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  ).isRequired,
  interval: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  totalIteration: PropTypes.number.isRequired
};

export default Game;
