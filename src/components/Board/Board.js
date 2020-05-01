import React from 'react';
import constants from '../../shared/constants';

const boardStyle = {
  width: constants.BOARD_WIDTH,
  height: constants.BOARD_HEIGHT,
  backgroundSize: `${constants.CELL_SIZE}px ${constants.CELL_SIZE}px`
};

const Board = () => {
  return <div className="board" style={boardStyle}>
    </div>;
};

export default Board;
