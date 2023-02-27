import { AddPosition, POSITION_ACTIONS } from './position-actions';

export const positionReducer = (state = [], action: AddPosition) => {
	switch (action.type) {
		case POSITION_ACTIONS.ADD_POSITION: {
			return action.positions;
		}
		default: {
			return state;
		}
	}
};
