/* eslint-disable no-shadow */
/* eslint-disable no-lonely-if */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './Game.css';
import Board from '../Board/Board';
import Controls from '../Controls/Controls';
import constants from '../../shared/constants';
import { makeEmptyBoard } from '../../shared/game';

const Game = ({
  rows,
  cols,
  board,
  cells,
  interval,
  isRunning,
  totalIteration,
  runGame,
  stopGame,
  nextStep,
  saveGameCells,
  markBoardPoint,
  handleClear
}) => {
  const timeoutHandler = useRef();

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

  /**
   * Calculate the number of neighbors at point (x, y)
   * @param {Array} board
   * @param {int} x
   * @param {int} y
   */

  const calculateNeighbors = (board, x, y) => {
    let neighbors = 0;
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1]
    ];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      const y1 = y + dir[0];
      const x1 = x + dir[1];

      if (x1 >= 0 && x1 < cols && y1 >= 0 && y1 < rows && board[y1][x1]) {
        neighbors++;
      }
    }

    return neighbors;
  }

  const runIteration = board => {
    console.log("runIteration");
    const newBoard = makeEmptyBoard(rows, cols);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const neighbors = calculateNeighbors(board, x, y);
        if (board[y][x]) {
          if (neighbors === 2 || neighbors === 3) {
            newBoard[y][x] = true;
          } else {
            newBoard[y][x] = false;
          }
        } else {
          if (!board[y][x] && neighbors === 3) {
            newBoard[y][x] = true;
          }
        }
      }
    }

    nextStep(newBoard, makeCells(newBoard, rows, cols));
    timeoutHandler.current = window.setTimeout(() => {
      runIteration(newBoard);
    }, interval);
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

  useEffect(() => {
    if (isRunning) {
      runIteration(board);
    } else {
      if (timeoutHandler.current) {
        window.clearTimeout(timeoutHandler.current);
        timeoutHandler.current = null;
        // handleClear();
      }
    }
  }, [isRunning]);

  return (
    <div className="game">
      <Board cells={cells} onSelectCell={handleClick} />
      <Controls
        clear={handleClear}
        run={runGame}
        stop={stopGame}
        isRunning={isRunning}
        totalIteration={totalIteration}
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
  totalIteration: PropTypes.number.isRequired,
  handleClear: PropTypes.func,
  runGame: PropTypes.func,
  stopGame: PropTypes.func,
  nextStep: PropTypes.func,
  saveGameCells: PropTypes.func,
  markBoardPoint: PropTypes.func
};

Game.defaultProps = {
  handleClear: () => {},
  runGame: () => {},
  stopGame: () => {},
  nextStep: () => {},
  saveGameCells: () => {},
  markBoardPoint: () => {}
};

export default Game;
