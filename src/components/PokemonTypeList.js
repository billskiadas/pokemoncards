import PokemonType from './PokemonType';
import './PokemonTypeList.css'

function PokemonTypeList(props) {
    const {ptypes} = props;

    return ( <div className='p-type-list'>
                {ptypes?.map((ptype,i) => <PokemonType key={i} ptype={ptype}/>)}
            </div> );
}

export default PokemonTypeList;