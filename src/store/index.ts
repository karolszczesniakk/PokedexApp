import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pokemonsSlice from "./pokemons-slice";


const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer
  }
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export default store;