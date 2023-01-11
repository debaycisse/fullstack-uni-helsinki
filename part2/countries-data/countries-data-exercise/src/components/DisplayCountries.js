import { useState } from "react";
import ShowButton from "./ShowButton"
import DisplayCountryDetails from "./DisplayCountryDetails";

const DisplayCountries = (props) => {
    const {searchResults, countriesData} = props

    // console.log(searchResults)   ['Angola', 'Anguilla']

    let detailedContents = '';

    const [contents, setContents]  = useState('');

    const countryNames = searchResults.map((country, id) => {
        // console.log(id, country)
        return (
            <p key={id}> 
                {country} <ShowButton displayCountryDetails={() => setContents(<DisplayCountryDetails  countriesData={countriesData} aCountry={country} />)} /> 
            </p> 
        )
    })
    
    console.log(countryNames)


    return (
        <>
            {countryNames.map((country) => country)}
            {contents}
        </>
    )
}

export default DisplayCountries;
