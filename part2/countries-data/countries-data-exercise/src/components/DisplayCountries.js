import { useState } from "react";
import ShowButton from "./ShowButton";
import DisplayCountryDetails from "./DisplayCountryDetails";

const DisplayCountries = (props) => {
    const {searchResults, countriesData} = props

    const [contents, setContents]  = useState('');

    const countryNames = searchResults.map((country, id) => {

        return (
            <p key={id}> 
                {country} <ShowButton displayCountryDetails={() => setContents(<DisplayCountryDetails  countriesData={countriesData} aCountry={country} />)} /> 
            </p> 
        )
    })
    
    return (
        <>
            {countryNames.map((country) => country)}
            {contents}
        </>
    )
}

export default DisplayCountries;
