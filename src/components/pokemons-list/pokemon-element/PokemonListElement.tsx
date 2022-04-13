import { useState } from "react";
import { useSelector } from "react-redux";
import capitalizeFirstLetter from "../../../functions/capitalizeFirstLtter";
import { RootState } from "../../../store";
import Pokemon from "../../../types/Pokemon";
import PokemonDetails from "./PokemonDetails";
import "./PokemonListElement.css";

const PokemonListElement: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { name, type, sprites, height, weight } = pokemon;
  const { front_default } = sprites;

  const themeType = useSelector((state: RootState) => state.theme.themeType);


  const handleClick = () => {
    setShowDetails((prevState) => !prevState);
  };

  let style = showDetails
    ? "pokemon-list-element pokemon-list-element--expand"
    : "pokemon-list-element";
  
  if (themeType === "light") {
    style += " pokemon-list-element--light"
  }

  return (
    <div className="pokemon-list-element-wrapper">
      <div onClick={handleClick} className={style}>
        <div className="pokemon-list-element--info">
          <div>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>Type: {capitalizeFirstLetter(type)}</p>
          </div>
          {showDetails && <PokemonDetails height={height} weight={weight} />}
        </div>
        <img src={front_default} alt={name} />
      </div>
    </div>
  );
};

export default PokemonListElement;
