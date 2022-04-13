import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GetPokemonsData, getPokemonsData } from './api/api';
import Layout from './components/layout/Layout';
import PokemonsList from './components/pokemons-list/PokemonsList';
import Button from './components/UI/Button';
import LoadingSpinner from './components/UI/LoadingSpinner';
import useHttp from './hooks/use-http';
import { RootState, useAppDispatch } from './store';
import { pokemonsActions } from './store/pokemons-slice';

function App() {
  const nextUrl = useSelector((state: RootState) => state.pokemons.next)
  const dispatch = useAppDispatch();
  const { sendRequest, data: apiData,status, error } = useHttp<GetPokemonsData>(getPokemonsData)

  const handleLoadMorePokemons = () => {
    sendRequest(nextUrl);
  }

  //fetch first 20 pokemons
  useEffect(() => {
    sendRequest("https://pokeapi.co/api/v2/pokemon");

  }, [sendRequest])

  //add pokemons to store everytime there new pokemons data
  useEffect(() => {
    if (apiData) {
      dispatch(pokemonsActions.addPokemons(apiData));
    }
  }, [apiData,dispatch]);
  
  let content = <LoadingSpinner />

  if (status === "completed" && apiData) {
    content = <PokemonsList />
  }

  if (error || (status==="completed" && !apiData)) {
    content = <p>Error with fetching products data</p>
  }
  
  return (
    <Layout>
      {content}
      <Button onClick={handleLoadMorePokemons}>Load more pokemons</Button>
      {status === "pending" && <LoadingSpinner />}
    </Layout>
  );
}

export default App;
