export const types = {
  RUN: 'RUN',
  STOP: 'STOP',
  NEXT: 'NEXT',
  SELECT_CELL: 'SELECT_CELL',
  MARK_POINT: 'MARK_POINT',
  SAVE_CELLS: 'SAVE_CELLS',
  NEXT_ITERATION: 'NEXT_ITERATION',
  CLEAR: 'CLEAR'
};

export const run = () => ({
  type: types.RUN
});

export const stop = () => ({
  type: types.STOP
});

export const selectCell = position => ({
  type: types.SELECT_CELL,
  position
});

export const markPoint = position => ({
  type: types.MARK_POINT,
  position
});

export const saveCells = (cells, mergeCells = false) => ({
  type: types.SAVE_CELLS,
  cells,
  mergeCells
});

export const nextIteration = (newBoard, cells) => ({
  type: types.NEXT_ITERATION,
  board: newBoard,
  cells
});

export const clear = () => ({
  type: types.CLEAR
});
