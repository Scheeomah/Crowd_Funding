import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backedAmount: 89914,
  backers: 5007,
  bookmarked: false,
};

const crowdfundingSlice = createSlice({
  name: 'crowdfunding',
  initialState,
  reducers: {
    updateBackedAmount: (state, action) => {
      state.backedAmount += action.payload;  // Add pledged amount to backedAmount
      console.log("Updated backedAmount:", state.backedAmount); // Debugging check
    },
    updateBackers: (state) => {
      state.backers += 1;  // Increment backers count
      console.log("Updated backers count:", state.backers); // Debugging check
    },
  },
});

export const { updateBackedAmount, updateBackers } = crowdfundingSlice.actions;
export default crowdfundingSlice.reducer;
