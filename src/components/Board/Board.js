import React from 'react';
import PropTypes from 'prop-types';

import constants from '../../shared/constants';
import Cell from '../Cell/Cell';

const boardStyle = {
  width: constants.BOARD_WIDTH,
  height: constants.BOARD_HEIGHT,
  backgroundSize: `${constants.CELL_SIZE}px ${constants.CELL_SIZE}px`
};

const Board = ({ cells, onSelectCell }) => {
  return (
    <div id="board" className="board" style={boardStyle} onClick={onSelectCell}>
      {cells.map((cell, index) => (
        <Cell
          x={cell.x}
          y={cell.y}
          CELL_SIZE={constants.CELL_SIZE}
          key={`${cell.x},${cell.y},${index}`}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSelectCell: PropTypes.func.isRequired
};

export default Board;
