export const types = {
  MARK_POINT: 'MARK_POINT',
  SAVE_CELLS: 'SAVE_CELLS'
};

export const markPoint = position => ({
  type: types.MARK_POINT,
  position
});

export const saveCells = (cells, mergeCells = false) => ({
  type: types.SAVE_CELLS,
  cells,
  mergeCells
});
