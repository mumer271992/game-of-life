// Create an empty board
export const makeEmptyBoard = (rows, cols) => {
  const board = [];
  for (let y = 0; y < rows; y++) {
    board[y] = [];
    for (let x = 0; x < cols; x++) {
      board[y][x] = false;
    }
  }
  return board;
};
