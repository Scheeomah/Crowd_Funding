import { configureStore } from '@reduxjs/toolkit';
import crowdfundingReducer from './crowdfundingSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    crowdfunding: crowdfundingReducer,
    ui: uiReducer,
  },
});
