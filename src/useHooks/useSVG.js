import {PiBooksBold} from 'react-icons/pi';
import {BiLeftArrowCircle, BiRightArrowCircle} from 'react-icons/bi';

const SVG = (props) => {

    const type = props.ability;

    if (type === 'counter' ) {
        return (
            <PiBooksBold className='icon'></PiBooksBold>
        )
    }
    if (type === 'right') {
        return (
            <BiRightArrowCircle className='icon'></BiRightArrowCircle>
        )
    }
    if (type === 'left') {
        return (
            <BiLeftArrowCircle className='icon'></BiLeftArrowCircle>
        )
    }
}
export default SVG;