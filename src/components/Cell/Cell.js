import React from 'react';
import PropTypes from 'prop-types';

function Cell({ x, y, CELL_SIZE }) {
  const cellStyle = {
    left: `${CELL_SIZE * x + 1}px`,
    top: `${CELL_SIZE * y + 1}px`,
    width: `${CELL_SIZE - 1}px`,
    height: `${CELL_SIZE - 1}px`
  };
  return <div className="cell" style={cellStyle} />;
}

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  CELL_SIZE: PropTypes.number.isRequired
};

export default Cell;
