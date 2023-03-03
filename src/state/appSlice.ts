import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
interface LoginState {
  isLoggedIn: boolean | null;
}

// Define the initial state using that type
const initialState = {
  isLoggedIn: undefined,
} as LoginState;

export const loginSlice = createSlice({
  name: "login",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLogin } = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const isLoggedIn = (state: RootState) => state.isLoggedIn;

export default loginSlice.reducer;
