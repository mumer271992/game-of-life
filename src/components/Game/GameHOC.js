import { connect } from 'react-redux';

import Game from './Game';
import {
  markPoint,
  saveCells,
  clear,
  run,
  stop,
  nextIteration
} from '../../store/game/actions';

const mapStateToProps = state => ({
  rows: state.game.rows,
  cols: state.game.cols,
  board: state.game.board,
  interval: state.game.interval,
  isRunning: state.game.isRunning,
  cells: state.game.cells,
  totalIteration: state.game.totalIteration
});

const mapDispatchToProps = dispatch => ({
  runGame: () => dispatch(run()),
  stopGame: () => dispatch(stop()),
  markBoardPoint: position => dispatch(markPoint(position)),
  saveGameCells: (cells, mergeCells) => dispatch(saveCells(cells, mergeCells)),
  nextStep: (board, cells) => dispatch(nextIteration(board, cells)),
  handleClear: () => dispatch(clear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
