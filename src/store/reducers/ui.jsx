import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: true,
};


export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleControlSidebar: (state) => {
      state.open = !state.open;
    },
  }
});

export const {
  toggleControlSidebar
} = uiSlice.actions;

export default uiSlice.reducer;
