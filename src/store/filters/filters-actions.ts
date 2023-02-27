export enum FILTER_ACTIONS {
	ADD_FILTER = 'ADD_FILTER',
	REMOVE_FILTER = 'REMOVE_FILTER',
	CLEAR_FILTER = 'CLEAR_FILTER',
}

export type AddFilter = {
	type: FILTER_ACTIONS.ADD_FILTER;
	filter: string;
};

export type RemoveFilter = {
	type: FILTER_ACTIONS.REMOVE_FILTER;
	filter: string;
};

export type ClearFilter = {
	type: FILTER_ACTIONS.CLEAR_FILTER;
};

export const addFilter = (filter: string): AddFilter => ({
	type: FILTER_ACTIONS.ADD_FILTER,
	filter,
});

export const removeFilter = (filter: string): RemoveFilter => ({
	type: FILTER_ACTIONS.REMOVE_FILTER,
	filter,
});

export const clearFilter: ClearFilter = {
	type: FILTER_ACTIONS.CLEAR_FILTER,
};
