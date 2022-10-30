import { useState, useEffect } from 'react';
import './Pokemon.css';
import { color as COLOR } from '../utils/palette';
import { PokemonMenuContext } from './PokemonMenuContext';
import PokemonDefaultCard from './PokemonDefaultCard';
import PokemonInfoCard from './PokemonInfoCard';

function Pokemon(props) {
    
  let [pokemon,setPokemon] = useState(null);
  let [menuOpened,setMenuOpened] = useState(false);
  
  useEffect(()=>{
    fetch(props.url)
      .then(results => results.json())
      .then(data => {
        setPokemon(data);

      });
  },[]);

    return (
        <div>
            <div className='container'>
                <div className='card' style={{backgroundColor: COLOR[pokemon?.types[0]?.type?.name]}} >
                    <PokemonMenuContext.Provider value={{menuOpened,setMenuOpened}}>
                        <PokemonInfoCard />
                        {!!pokemon && <PokemonDefaultCard pokemonName={pokemon?.name.replaceAll('-',' ')} 
                                            ptypes={pokemon?.types}
                                            pokemonSpriteFront={pokemon?.sprites?.front_default} 
                                            pokemonSpriteBack={pokemon?.sprites?.back_default} 
                                            pokemonSpriteFrontShinny={pokemon?.sprites?.front_shiny} 
                                            pokemonSpriteBackShinny={pokemon?.sprites?.back_shiny}
                                            pokemonOfficialSprite={pokemon?.sprites?.other['official-artwork']?.front_default} />}
                    </PokemonMenuContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;