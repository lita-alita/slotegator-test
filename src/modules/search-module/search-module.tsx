import { useState } from "react";
import CountryList from "../../components/country-list/country-list";
import Filter from "../../components/filter/filter";
import SearchBar from "../../components/search-bar/search-bar";
import {ReactComponent as CloseImage} from '../../accets/icons/close.svg'
import './search-module.scss';

export default function SearchModule () {
    const [search, setSearch] = useState('')
    const [country, setCountry] = useState('')

    return (
        <div className="search-module">
            <div className='head'>
                {country === '' ? (
                    <>
                        <SearchBar searchHandler={setSearch}/>
                        <Filter/>
                   </>) : (
                   <>
                        
                        <button
                        className='closeButton'
                            onClick={()=>setCountry('')}
                        >
                           <CloseImage /> 
                        </button>
                        <p>{country}</p>
                   </>)
                }
            </div>
           <CountryList search={search ? search : undefined} countrySetter={setCountry} country={country}/>
        </div>
    )
}