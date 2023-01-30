import {ReactComponent as ShapeImage} from '../../accets/icons/shape.svg'
import './filter.scss'

export default function Filter () {
    return (
        <button className='filterButton'>
            <ShapeImage/>
            Filter
        </button>
    )
}