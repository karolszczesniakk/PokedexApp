import { PokemonsData } from "../store/pokemons-slice";
import Pokemon from "../types/Pokemon";

export type GetPokemonsData = (url: string) => any;

type GeneralData = {
  count: number;
  next: string;
  previous: string | null;
  results: Result[];
  message?: string;
};

type Result = {
  name: string;
  url: string;
};

export const getPokemonsData: GetPokemonsData = async (url: string) => {
  const response = await fetch(url);

  //getting general data that contains
  const generalData: GeneralData = await response.json();

  if (!response.ok) {
    throw new Error(generalData.message || "Could not fetch products");
  }

  //getting detailed pokemons data urls
  const pokemonsDataUrls = generalData.results.map(
    (result: Result) => result.url
  );
  console.log(pokemonsDataUrls);

  const pokemonsPromises = pokemonsDataUrls.map(async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  });

  //detailed data of 20 pokemons
  const detailedData = await Promise.all(pokemonsPromises);
  console.log(detailedData);

  //transforming data
  const pokemonsData: Pokemon[] = detailedData.map((pokemonData: any) => {
    const pokemon: Pokemon = {
      name: pokemonData.name,
      //converting height and weight to meters and kgs and making them have only 2 decimal places
      height: +(pokemonData.height * 0.1).toFixed(2), 
      weight: +(pokemonData.weight * 0.1).toFixed(2), 
      sprites: {
        front_default: pokemonData.sprites.front_default,
        back_default: pokemonData.sprites.back_default,
      },
      type: pokemonData.types[0].type.name,
    };
    return pokemon;
  });

  const finalData: PokemonsData = {
    next: generalData.next,
    pokemons: pokemonsData,
  };

  console.log(finalData);

  return finalData;
};
