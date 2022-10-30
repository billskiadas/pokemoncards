import './App.css';
import {useState,useEffect} from 'react';
import Pokemon from './components/Pokemon.js'

function App() {

  let POKEMON_API = 'https://pokeapi.co/api/v2/pokemon?limit=9999999';

  let [totalPokemon,setTotalPokemon] = useState(0);
  let [pokemonArray,setPokemonArray] = useState([]);
  
  useEffect(()=>{
    let pokeUrl = [];
    fetch(POKEMON_API)
      .then(results => results.json())
      .then(data => {
        setTotalPokemon(data.count);
        let randomTotalPokemonArray = Array(data.count-1).fill().map(() => Math.round(Math.random() * (data.count-1)));
        randomTotalPokemonArray.map(idx => pokeUrl.push(data.results[idx].url));
        setPokemonArray(pokeUrl);
      });

  },[]);
  
  return (
    <div className="App">
      <h1><p className='pokefont-main'>Poke-Generator</p></h1>
      <div className='pokeball-stripe'>
        <span className="dot"><div className="btn" onClick={()=> window.location.reload(false)}/></span>
      </div>

      <div className='poke-wrap'>
      { !!pokemonArray[0] && <Pokemon url={pokemonArray[0]} />}
      { !!pokemonArray[1] && <Pokemon url={pokemonArray[1]} />}
      { !!pokemonArray[2] && <Pokemon url={pokemonArray[2]} />}
      { !!pokemonArray[3] && <Pokemon url={pokemonArray[3]} />}
      { !!pokemonArray[4] && <Pokemon url={pokemonArray[4]} />}
      { !!pokemonArray[5] && <Pokemon url={pokemonArray[5]} />}
      { !!pokemonArray[6] && <Pokemon url={pokemonArray[6]} />}
      { !!pokemonArray[7] && <Pokemon url={pokemonArray[7]} />}
      { !!pokemonArray[8] && <Pokemon url={pokemonArray[8]} />}
      </div>
    </div>
  );
}

export default App;
