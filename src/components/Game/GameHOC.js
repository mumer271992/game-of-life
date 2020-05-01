import { connect } from 'react-redux';

import Game from './Game';
import { markPoint, saveCells, clear } from '../../store/game/actions';

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
  markBoardPoint: position => dispatch(markPoint(position)),
  saveGameCells: (cells, mergeCells) => dispatch(saveCells(cells, mergeCells)),
  handleClear: () => dispatch(clear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
