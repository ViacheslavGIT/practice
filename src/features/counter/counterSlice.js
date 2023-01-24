import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  valueOfCounter: 65,
  someData: true,
  someProp: "Ros",
};

const counterSlice = createSlice({
  name: "valueOfCounter",
  initialState: initialData,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.valueOfCounter += 1;
    },
    decrement: (state) => {
      state.valueOfCounter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.valueOfCounter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
