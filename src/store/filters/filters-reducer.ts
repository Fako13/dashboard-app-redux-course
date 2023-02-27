import {
	AddFilter,
	ClearFilter,
	FILTER_ACTIONS,
	RemoveFilter,
} from './filters-actions';

export const filterReducer = (
	state: string[] = [],
	action: AddFilter | RemoveFilter | ClearFilter
) => {
	switch (action.type) {
		case FILTER_ACTIONS.ADD_FILTER: {
			if (!state.includes(action.filter)) {
				return [...state, action.filter];
			}
			return state;
		}
		case FILTER_ACTIONS.REMOVE_FILTER: {
			return state.filter((filter) => action.filter !== filter);
		}
		case FILTER_ACTIONS.CLEAR_FILTER: {
			return [];
		}
		default: {
			return state;
		}
	}
};
