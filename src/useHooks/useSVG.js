import {PiBooksBold} from 'react-icons/pi';
import {BiLeftArrowCircle, BiRightArrowCircle} from 'react-icons/bi';
import {BsFillBookmarkPlusFill, BsBookmarkDashFill} from 'react-icons/bs';
import {FaBookMedical, FaBookDead, } from 'react-icons/fa';
import {FaBook} from 'react-icons/fa';

const SVG = (props) => {

    const type = props.ability;

    if (type === 'counter' ) {
        return (
            <PiBooksBold className='icon counter'></PiBooksBold>
        )
    }
    if (type === 'right') {
        return (
            <BiRightArrowCircle className='icon right'></BiRightArrowCircle>
        )
    }
    if (type === 'left') {
        return (
            <BiLeftArrowCircle className='icon left'></BiLeftArrowCircle>
        )
    }
    if (type === 'add') {
        return (
            <BsFillBookmarkPlusFill className='icon add'></BsFillBookmarkPlusFill>
        )
    }
    if (type === 'sub') {
        return (
            <BsBookmarkDashFill className='icon sub'></BsBookmarkDashFill>
        )
    }
    if (type === 'addcollection') {
        return (
            <BsFillBookmarkPlusFill className='icon addcollection'></BsFillBookmarkPlusFill>
        )
    }
    if (type === 'savecollection') {
        return (
            <FaBookMedical className='icon savecollection'></FaBookMedical>
        )
    }
    if (type === 'deletecollection') {
        return (
            <FaBookDead className='icon deletecollection'></FaBookDead>
        )
    }
    if (type === 'newcollection') {
        return (
            <FaBook className='icon newcollection'></FaBook>
        )
    }
}
export default SVG;