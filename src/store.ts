import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterReducer } from './features/filter/filter-slice';
import { positionsReducer } from './features/positions/positions-slice';

const rootReducer = combineReducers({
	filter: filterReducer,
	positions: positionsReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: true,
			},
		}),
});

export const persistor = persistStore(store);
