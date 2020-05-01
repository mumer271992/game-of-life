export const types = {
  MARK_POINT: 'MARK_POINT',
  SAVE_CELLS: 'SAVE_CELLS',
  CLEAR: 'CLEAR'
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

export const clear = () => ({
  type: types.CLEAR
});
