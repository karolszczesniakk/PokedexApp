import "./PokemonDetails.css"

type Props = {
  height: number;
  weight: number;
};

const PokemonDetails: React.FC<Props> = ({height,weight}) => {
  return (
    <div className="pokemon-details">
      <h3>Details:</h3>
      <p>Weight: {weight}kg</p>
      <p>Height: {height}m</p>
    </div>
  );

}

export default PokemonDetails