import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  value: boolean | undefined;
}

const initialState: LoginState = {
  value: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {},``
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementByAmount } = loginSlice.actions;

export default counterSlice.reducer;
