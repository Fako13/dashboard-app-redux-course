import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: '@@filter',
	initialState: [],
	reducers: {
		addFilter: (state: any, action) => {
			if (!state.includes(action.payload)) {
				state.push(action.payload);
			}
		},
		removeFilter: (state: any, action) => {
			return state.filter((filter: string) => action.payload !== filter);
		},
		clearFilter: () => [],
	},
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const selectFilters = (state: any): string[] => state.filter;
