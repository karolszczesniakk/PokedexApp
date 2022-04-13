import './PokemonIcon.css'

type Props = {
  sprites: {
    front_default: string,
    back_default: string,
  }
}

const PokemonIcon: React.FC<Props> = ({sprites}) => {
  const {front_default} = sprites
  return (
    <div className="icon-container">
      <img src={front_default} alt="pokemon"></img>
    </div>
  );
}

export default PokemonIcon;