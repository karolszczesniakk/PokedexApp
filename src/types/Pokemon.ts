type Pokemon = {
  name: string;
  height: number;
  weight: number;

  sprites: {
    front_default: string;
    back_default: string;
  };

  type: string;
};

export default Pokemon;
