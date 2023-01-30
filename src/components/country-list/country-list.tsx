import InfoMode from "../info-mode/info-mode"
import './country-list.scss'

type CountryListProps = {
    search?: string;
    countrySetter: Function;
    country: string
}

export default function CountryList (props: CountryListProps) {
    const countries = ["Albania", "Andorra", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland"]
    //there is should be geter from server

    if (props.country !== '') {
        return (
            <InfoMode country={props.country}/>
        )
    }

    if (props.search) {
        const FilteredCountries = countries.filter((country: string)=> { 
            return country.toLowerCase().includes(props.search!.toLowerCase())
        })
        console.log("serched")
        return (
           <div className="countryList">
                {FilteredCountries?.map((counrty: string) => {
                    return (
                        <p 
                            key={counrty.toLowerCase()}
                            onClick={() => props.countrySetter(counrty)}
                        >{counrty}</p>
                    )
                })}
           </div> 
        )
    }

    return (
        <div className="countryList">
            {countries?.map((counrty: string) => {
                return (
                    <p 
                        key={counrty.toLowerCase()}
                        onClick={() => props.countrySetter(counrty)}
                    >{counrty}</p>
                )
            })}
        </div>
    )
}