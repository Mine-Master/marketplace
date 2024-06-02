import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.marketPlace || initialState;

export const selectMarketPlace = createSelector(
  [selectDomain],
  marketPlaceState => marketPlaceState,
);
