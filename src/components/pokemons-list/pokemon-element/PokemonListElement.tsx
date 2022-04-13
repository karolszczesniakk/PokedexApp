import Pokemon from "../../../types/Pokemon"
import "./PokemonListElement.css"
import PokemonIcon from "./PokemonIcon";

const PokemonListElement: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const { name, type, sprites } = pokemon;
  const { front_default } = sprites;
  return (
    <div className="pokemon-list-element">
      <div>
        <h1>{name}</h1>
        <p>Type: {type}</p>
      </div>
      <img src={front_default} alt={name} />
    </div>
  );
};

export default PokemonListElement;