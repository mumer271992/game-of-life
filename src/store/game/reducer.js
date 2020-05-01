import { types } from './actions';
import { makeEmptyBoard } from '../../shared/game';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

const rows = HEIGHT / CELL_SIZE;
const cols = WIDTH / CELL_SIZE;

const defaultState = {
  rows,
  cols,
  board: makeEmptyBoard(rows, cols),
  cells: [],
  isRunning: false,
  interval: 500,
  totalIteration: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.RUN: {
      return {
        ...state,
        isRunning: true
      };
    }
    case types.STOP: {
      return {
        ...state,
        isRunning: false
      };
    }
    case types.MARK_POINT: {
      const { position } = action;
      const boardCopy = [...state.board];
      boardCopy[position.x][position.y] = !boardCopy[position.x][position.y];
      return {
        ...state,
        board: boardCopy
      };
    }
    case types.SAVE_CELLS: {
      const { cells, mergeCells } = action;
      return {
        ...state,
        cells: !mergeCells ? [...cells] : [...state.cells, ...cells]
      };
    }
    case types.NEXT_ITERATION: {
      const { cells, board } = action;
      return {
        ...state,
        cells,
        board,
        totalIteration: state.totalIteration + 1,
      };
    }
    case types.CLEAR: {
      return {
        ...state,
        board: makeEmptyBoard(),
        cells: []
      };
    }
    default:
      return state;
  }
};
