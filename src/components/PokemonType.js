import { SVG } from '../utils/svg';
import { color as COLOR } from '../utils/palette';
import './PokemonType.css';

function PokemonType(props) {
    const { ptype } = props;
    const SVGType = SVG.TypeIcon[ptype.type.name];
    const svgOptions ={
        sizeMinimal: {
            WIDTH:'20',
            HEIGHT:'20'
        },
        sizeAnalytical: {
            WIDTH:'???',
            HEIGHT:'???'
        }
    }; 

    return (
            <div title={ptype.type.name.toUpperCase()}>
                <SVGType width={svgOptions.sizeMinimal.WIDTH} height={svgOptions.sizeMinimal.HEIGHT} className='p-type-minimal' fill={COLOR[ptype.type.name]}/>
            </div>
        );
}

export default PokemonType;