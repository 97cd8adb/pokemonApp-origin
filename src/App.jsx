import { useEffect, useState } from 'react'
import './App.css'
import './components/Card.css'
import Card from './components/Card';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=21`
        );
        const data = await response.json();
        const detailedPromises = data.results.map(
          pokemon => fetch(pokemon.url).then(res => res.json())
        );
        const detailedPokemonList = await Promise.all(
          detailedPromises
        );
        setPokemonList(detailedPokemonList);
      } catch (error) {
        console.error(error);
      }
    }; fetchData();
  }, [offset])

  return (
    <div>
      <h1>ポケモン図鑑</h1>
      <div className="pokemonContainer">
        {pokemonList.map((pokemon) => (
         <Card key={pokemon.name} pokemon={pokemon}/>
        ))}
      </div>
      <div className="buttonContainer">
        <button className="btn-prev"
          onClick={() => { if(offset > 0) setOffset(offset - 20)}}>
          前へ
        </button>
        <button className="btn-next"
          onClick={() => setOffset(offset + 20)}>
          次へ
        </button>
      </div>
    </div>
  ) 
}



export default App
