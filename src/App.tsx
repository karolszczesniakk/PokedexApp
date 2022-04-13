import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GetPokemonsData, getPokemonsData } from './api/api';
import Layout from './components/layout/Layout';
import useHttp from './hooks/use-http';
import { RootState, useAppDispatch } from './store';
import { pokemonsActions } from './store/pokemons-slice';


function App() {
  //const nextUrl = useSelector((state: RootState) => state.pokemons.next)
  const dispatch = useAppDispatch();
  const { sendRequest, data: apiData } = useHttp<GetPokemonsData>(getPokemonsData)

  //fetch first 20 pokemons
  useEffect(() => {
    sendRequest("https://pokeapi.co/api/v2/pokemon");

  }, [sendRequest])

  //add pokemons to store everytime there new pokemons data
  useEffect(() => {
    console.log("dispatching");
    if (apiData) {
      dispatch(pokemonsActions.addPokemons(apiData));
    }
  }, [apiData,dispatch]);
  
  console.log(apiData);
  
  return (
    <div className="App">
      <Layout>
        <div> Witam123 </div>
      </Layout>
    </div>
  );
}

export default App;
