import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './Game.css';
import Board from '../Board/Board';
import Controls from '../Controls/Controls';
import constants from '../../shared/constants';

const Game = ({
  rows,
  cols,
  board,
  cells,
  interval,
  isRunning,
  totalIteration,
  saveGameCells,
  markBoardPoint,
  handleClear
}) => {
  // const boardRef = useRef();

  const getElementOffset = () => {
    const boardElement = document.getElementById('board');
    const rect = boardElement.getBoundingClientRect();
    const doc = document.documentElement;

    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop
    };
  };

  const makeCells = (board, rows, cols) => {
    const tempCells = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (board[y][x]) {
          tempCells.push({ x, y });
        }
      }
    }
    return tempCells;
  };

  const handleClick = event => {
    const elemOffset = getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;
    const x = Math.floor(offsetX / constants.CELL_SIZE);
    const y = Math.floor(offsetY / constants.CELL_SIZE);
    if (x >= 0 && x <= cols && y >= 0 && y <= rows) {
      markBoardPoint({ x: y, y: x });
    }
    saveGameCells(makeCells(board, rows, cols), true);
  };

  return (
    <div className="game">
      <Board cells={cells} onSelectCell={handleClick} />
      <Controls clear={handleClear} />
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
  totalIteration: PropTypes.number.isRequired,
  handleClear: PropTypes.func
};

Game.defaultProps = {
  handleClear: () => {}
};

export default Game;
