import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Pokemon from "../../types/Pokemon";
import FilterOptions from "./FilterOptions";
import PokemonListElement from "./pokemon-element/PokemonListElement";

import "./PokemonsList.css";

const PokemonsList: React.FC = () => {
  const [nameFilter, setNameFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");

  const handleFilterChange = (newNameFilter: string, newTypeFilter: string) => {
    setNameFilter(newNameFilter);
    setTypeFilter(newTypeFilter);
  }

  const pokemonsData = useSelector(
    (state: RootState) => state.pokemons.pokemons
  );

  let filteredPokemonsData = pokemonsData.filter((pokemon: Pokemon) => {
    return pokemon.name.includes(nameFilter) && pokemon.type.includes(typeFilter);
  });

  return (
    <>
      <FilterOptions onSubmit={handleFilterChange} />
      <div className="pokemons-list">
        {filteredPokemonsData.map((pokemon: Pokemon) => (
          <PokemonListElement
            key={pokemon.name as React.Key}
            pokemon={pokemon}
          />
        ))}
      </div>
    </>
  );
};

export default PokemonsList;
