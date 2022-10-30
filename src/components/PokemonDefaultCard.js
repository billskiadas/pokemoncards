import { useContext } from 'react';
import { SVG } from '../utils/svg';
import {color as COLOR} from '../utils/palette';
import PokemonTypeList from './PokemonTypeList';
import { PokemonMenuContext } from './PokemonMenuContext';
import './PokemonDefaultCard.css';

function PokemonDefaultCard(props) {

    const {
            pokemonName, 
            ptypes,
            pokemonSpriteFront, 
            pokemonSpriteBack, 
            pokemonSpriteFrontShinny, 
            pokemonSpriteBackShinny,
            pokemonOfficialSprite
        } = props;

    const { menuOpened, setMenuOpened } = useContext(PokemonMenuContext);

    return <div onClick={()=> {menuOpened && setMenuOpened(false)}}>
                <div className='pokeball-background'>
                        <SVG.PokeballIcon  style={{width:"200%", filter:"brightness(1.1)", opacity:".7"}} fill={COLOR[ptypes[0].type.name]} />
                </div>
                <div className='card-content'>
                    <p className={`pokefont ${menuOpened? 'pokefont-animate':'pokefont-reset'}`}>{pokemonName.toUpperCase()}</p>
                    <div className={menuOpened? 'main-image-animate' : 'main-image-reset'}>
                        <img className={!menuOpened?'main-image':''} height="190px" onClick={()=>setMenuOpened(true)} src={pokemonOfficialSprite || pokemonSpriteFront}/>
                    </div>
                    <div>
                        {pokemonSpriteFront && <img alt='sprite-front' className={!menuOpened? 'bounce': undefined} height='100px' src={pokemonSpriteFront}/>}
                        {pokemonSpriteBack && <img alt='sprite-back' className={!menuOpened?'bounce': undefined} height='100px' src={pokemonSpriteBack}/>}
                        {pokemonSpriteFrontShinny&& <img alt='sprite-shinny-front' className={!menuOpened? 'bounce':undefined} height='100px' src={pokemonSpriteFrontShinny}/>}
                        {pokemonSpriteBackShinny && <img alt='sprite-shinny-back' className={!menuOpened? 'bounce':undefined} height='100px' src={pokemonSpriteBackShinny}/>}
                    </div>
                </div>
                <PokemonTypeList ptypes={ptypes} />
        </div>;
        }

export default PokemonDefaultCard;