import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [searchKeywords, setSearchKeywords] = useState("");
    const [countriesData, setCountriesData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    let displayContents;

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => {
                setCountriesData(response.data);
            });
    }, []);

    const handleKeywordChange = (event) => {
        setSearchKeywords(event.target.value);

        const result = countriesData.filter((country) =>
            country.name.common.toLowerCase().includes(searchKeywords.toLowerCase())
        );

        const result_names = result.map((country) => country.name.common);

        setSearchResults(result_names);
    };

    const displayCountryDeatils = (country) => {
        
        const countryDetails = countriesData.find((eachCountry) => eachCountry.name.common.includes(country));
        
        console.log(countryDetails.capital[0]);
        

        // displayContents =
        //     <div>
        //         <h1>{countryDetails.name.common}</h1>
        //         <p>Capital {countryDetails.capital[0]}</p>
        //         <p>Area {countryDetails.area}</p>
        //         <b>Languages</b>
        //         <ul>
        //             {Object.values(countryDetails.languages).map((value, id) => (
        //                 <li key={id}>{value}</li>
        //             ))}
        //         </ul>
        //         <img src={countryDetails.flags.png} alt="country's flag" />
        //     </div>
        
    }

    if (searchResults.length > 10) {
        displayContents = <p>Too many matches, specify another filter.</p>;
    } else if (searchResults.length <= 10 && searchResults.length > 1) {
        displayContents = searchResults.map((country, id) => (
            <p key={id}> 
                {country} <button onClick={displayCountryDeatils(country)}>show</button> 
            </p>
        ));
    } else if (searchResults.length === 1) {
        const country = countriesData.find((country) =>
            country.name.common.includes(searchResults)
        );

        displayCountryDeatils(country.name.common);

        /*
        displayContents = (
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital {country.capital[0]}</p>
                <p>Area {country.area}</p>
                <b>Languages</b>
                <ul>
                    {Object.values(country.languages).map((value, id) => (
                        <li key={id}>{value}</li>
                    ))}
                </ul>
                <img src={country.flags.png} alt="country's flag" />
            </div>
        );
        */
    }

    return (
        <div>
            Find Countries{" "}
            <input value={searchKeywords} onChange={handleKeywordChange} />
            <>{displayContents}</>
        </div>
    );
};

export default App;