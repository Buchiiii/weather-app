import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface tempSlice {
  type: string;
}

// Define the initial state using that type
const initialState: tempSlice = {
  type: "celsius",
};

const tempSlice = createSlice({
  name: "temp",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTemp: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { setTemp } = tempSlice.actions;

export default tempSlice.reducer;
