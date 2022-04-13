import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Pokemon from "../../types/Pokemon";
import PokemonListElement from "./pokemon-element/PokemonListElement";

import "./PokemonsList.css";

const PokemonsList: React.FC = () => {
  const pokemonsData = useSelector(
    (state: RootState) => state.pokemons.pokemons
  );
  return (
    <div className="pokemons-list">
      {pokemonsData.map((pokemon: Pokemon) => (
        <PokemonListElement
          key={pokemon.name as React.Key}
          pokemon={pokemon}
        />
      ))}
    </div>
  );
};

export default PokemonsList;
