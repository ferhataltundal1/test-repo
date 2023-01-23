import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  value: boolean;
}
const initialState: ThemeState = {
  value: false,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.value) {
        state.value = false;
      } else {
        state.value = true;
      }
    },
  },
});
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;