import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PayloadProps {
  number: number;
  name: string;
}
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
        state.value -= 1;
      }
    },
    resetCounter: state => {
      state.value = 0;
    },
    randomIncrementCounter: (state, action: PayloadAction<PayloadProps>) => {
      if (state.value < 99) {
        state.value += action.payload.number;
      }
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  resetCounter,
  randomIncrementCounter,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
