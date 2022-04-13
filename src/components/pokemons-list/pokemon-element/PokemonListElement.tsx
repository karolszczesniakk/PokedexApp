import { useState } from "react";
import Pokemon from "../../../types/Pokemon";
import PokemonDetails from "./PokemonDetails";
import "./PokemonListElement.css";

const PokemonListElement: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { name, type, sprites, height, weight } = pokemon;
  const { front_default } = sprites;

  const handleClick = () => {
    setShowDetails((prevState) => !prevState);
  };

  const style = showDetails
    ? "pokemon-list-element pokemon-list-element--expand"
    : "pokemon-list-element";

  return (
    <div onClick={handleClick} className={style}>
      <div className="pokemon-list-element--info">
        <div>
          <h1>{name}</h1>
          <p>Type: {type}</p>
        </div>
        {showDetails && <PokemonDetails height={height} weight={weight} />}
      </div>
      <img src={front_default} alt={name} />
    </div>
  );
};

export default PokemonListElement;
