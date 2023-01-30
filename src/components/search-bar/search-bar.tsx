import { useState } from 'react'
import {ReactComponent as SearchImage} from '../../accets/icons/search.svg'
import './search-bar.scss';

type SearchBarProps = {
    searchHandler: Function
}

export default function SearchBar (props: SearchBarProps) {
    const [search, setSearch] = useState('')

    return (
        <div className='searchBar'>
            <input
                placeholder='Search country...'
                onChange={(e)=>{
                    setSearch(e.target.value.trim());
                    props.searchHandler(search)
                }}
            >
            </input>
            <button
                onClick={()=>props.searchHandler(search)}
            >
                <SearchImage/>
            </button>
        </div>
    )
}