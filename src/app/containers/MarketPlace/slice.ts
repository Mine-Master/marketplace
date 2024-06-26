/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState } from './types';
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { marketPlaceSaga } from './saga';

// The initial state of the MarketPlace container
export const initialState: ContainerState = {};

const marketPlaceSlice = createSlice({
  name: 'marketPlace',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions:marketPlaceActions, reducer:marketPlaceReducer, name: sliceKey } = marketPlaceSlice;

export const usemarketPlaceSlice=()=>{
useInjectReducer({ key: sliceKey, reducer: marketPlaceReducer });
useInjectSaga({ key: sliceKey, saga: marketPlaceSaga });
return { marketPlaceActions }
}