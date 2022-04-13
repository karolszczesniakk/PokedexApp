type Pokemon = {
  name: String;
  height: number;

  sprites: {
    front_default: string;
    back_default: string;
  };

  type: {
    name: string;
    url: string;
  };
};

export default Pokemon;
