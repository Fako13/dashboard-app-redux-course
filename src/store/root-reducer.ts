import { combineReducers } from 'redux';
import { filterReducer } from './filters/filters-reducer';
import { positionReducer } from './positions/position-reducer';

export const rootReducer = combineReducers({
	positions: positionReducer,
	filter: filterReducer,
});
