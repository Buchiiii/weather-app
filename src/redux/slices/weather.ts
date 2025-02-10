import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface WeatherState {
  data: { [key: string]: any } | null;
}

// Define the initial state using that type
const initialState: WeatherState = {
  data: null,
};

const weatherSlice = createSlice({
  name: "weather",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<{}>) => {
      state.data = action.payload;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
