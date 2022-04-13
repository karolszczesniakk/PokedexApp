import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Pokemon from "../types/Pokemon";

export type PokemonsData = {
  next: string,
  pokemons: Pokemon[],
}

const defaultState: PokemonsData = {
  next: "https://pokeapi.co/api/v2/pokemon",
  pokemons: [],
};

const addPokemons: CaseReducer<PokemonsData, PayloadAction<PokemonsData>> = (state, action) => {
  state.next = action.payload.next;
  state.pokemons = [...state.pokemons, ...action.payload.pokemons];
}

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: defaultState,
  reducers: {
    addPokemons,
  },
});

export const pokemonsActions = pokemonsSlice.actions;

export default pokemonsSlice

