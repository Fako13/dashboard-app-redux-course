import { createSlice } from '@reduxjs/toolkit';
import { JobPositionTypes } from './JobPosition';

const positionsSlice = createSlice({
	name: '@@positions',
	initialState: [],
	reducers: {
		addPositions: (_, action) => action.payload,
	},
});

export const { addPositions } = positionsSlice.actions;

export const positionsReducer = positionsSlice.reducer;

export const selectAllPositions = (state: any): JobPositionTypes[] =>
	state.positions;

export const selectVisiblePositions = (
	state: any,
	filters: string[] = []
): JobPositionTypes[] => {
	if (filters.length === 0) return state.positions;

	return state.positions.filter((pos: JobPositionTypes) => {
		const posFilters = ([] as string[]).concat(
			pos.role,
			pos.level,
			...pos.languages,
			...pos.tools
		);
		return filters.every((filter) => posFilters.includes(filter));
	});
};
