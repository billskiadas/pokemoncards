import {useState, useContext} from 'react';
import { PokemonMenuContext } from './PokemonMenuContext';
import './PokemonInfoCard.css';


function PokemonInfoCard(props) {
    const {} = props;
    const {currentPage, setCurrentPage} = useState('Info');
    const { menuOpened } = useContext(PokemonMenuContext);
    return ( <div className={`info-menu ${menuOpened? '' : 'info-menu-close'}`}>
                <div className='info-menu-container'>
                    <nav className='info-menu-header'>
                        <a style={{backgroundColor:'lightgray'}}>Info</a>
                        <a>Stats</a>
                    </nav>
                    <hr style={{backgroundColor:'rgba(220,220,220,0.001)'}}/>
                    <div className='info-menu-content'>
                        {/*<div>FOCUS-IN-ANIMATION-EASEINQUAD-500MS</div>*/}
                        <div style={{fontFamily:'PokeFont',fontWeight:'0'}}>HP</div>
                        <div style={{fontFamily:'PokeFont',fontWeight:'0'}}>Atk</div>
                        <div style={{fontFamily:'PokeFont',fontWeight:'0'}}>Sp. Atk</div>
                        <div style={{fontFamily:'PokeFont',fontWeight:'0'}}>Def</div>
                        <div style={{fontFamily:'PokeFont',fontWeight:'0'}}>Sp. Def</div>
                        <div style={{fontFamily:'PokeFont',fontWeight:'0'}}>Speed</div>
                        <div style={{fontFamily:'PokeFont',fontWeight:'0'}}>Total</div>
                    </div>
                </div>
            </div>  );
}

export default PokemonInfoCard;