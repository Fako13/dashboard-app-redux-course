import { JobPositionTypes } from '../../components/JobPosition';

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
