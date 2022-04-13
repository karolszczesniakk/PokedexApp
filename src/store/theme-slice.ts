import { CaseReducer, createSlice } from "@reduxjs/toolkit";

export type Theme = {
  themeType: "dark" | "light";
} 

const defaultState: Theme = {
  themeType: "dark",
} 

const toggleTheme: CaseReducer<Theme> = (state) => {
  if (state.themeType === "light") {
    state.themeType = "dark";
  } else {
    state.themeType = "light";
  }
};


const themeSlice = createSlice({
  name: "theme",
  initialState: defaultState,
  reducers: {
    toggleTheme,
  }
})


export const themeActions = themeSlice.actions;

export default themeSlice;
