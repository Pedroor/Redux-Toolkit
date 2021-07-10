import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "@counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCounter: state => {
      state.value += 1;
    },
    decrementCounter: state => {
      if (state.value > 0) {
        state.value >= 1;
      }
    },
    resetCounter: state => {
      state.value = 0;
    },
  },
});

export const { incrementCounter, decrementCounter, resetCounter } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
