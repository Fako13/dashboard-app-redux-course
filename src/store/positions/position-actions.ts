import { JobPositionTypes } from '../../components/JobPosition';

export enum POSITION_ACTIONS {
	ADD_POSITION = 'ADD_POSITION',
}

export type AddPosition = {
	type: POSITION_ACTIONS;
	positions: JobPositionTypes[];
};

export const addPositions = (positions: JobPositionTypes[]): AddPosition => ({
	type: POSITION_ACTIONS.ADD_POSITION,
	positions,
});
