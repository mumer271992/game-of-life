import { createStore, combineReducers } from 'redux';
import game from './game/reducer';

const reducers = combineReducers({
  game
});

const store = createStore(reducers);

export default store;
