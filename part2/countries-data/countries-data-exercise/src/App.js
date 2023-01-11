import { useState, useEffect } from "react";
import axios from "axios";
import DisplayCountries from "./components/DisplayCountries";
import DisplayCountryDetails from "./components/DisplayCountryDetails";

const App = () => {
    const [searchKeywords, setSearchKeywords] = useState("");
    const [countriesData, setCountriesData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    
    let displayContents = '';
    
    
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
            country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
        );

        const resultNames = result.map((country) => country.name.common);

        // setSearchResults(result_names);
        // console.log('result names: ', resultNames)
        
        setSearchResults(resultNames);
        
    };
    
    
        // Obtaining value for displayContent
        if(searchResults.length === 0){
            // setContents('')
            displayContents = ''
        } else if (searchResults.length > 10) {
            
            // setContents(<p>Too many matches, specify another filter.</p>);
            
            displayContents = <p>Too many matches, specify another filter.</p>;
            
        } else if (searchResults.length <= 10 && searchResults.length > 1) {
                            
            // setContents(<DisplayCountries searchResults={searchResults} countriesData={countriesData} />)
            
            displayContents = <DisplayCountries searchResults={searchResults} countriesData={countriesData} />
            
        } else if (searchResults.length === 1) {
            
            // setContents(<DisplayCountryDetails countriesData={countriesData} aCountry={searchResults} />)
            
            displayContents = <DisplayCountryDetails countriesData={countriesData} aCountry={searchResults} />
            
        }
        
    
    
    

<<<<<<< HEAD
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
=======
    // setContents(displayContents)
    // console.log('search results', searchResults)
    console.log('displayContents', displayContents)

    const [contents, setContents] = useState(displayContents);
    
>>>>>>> 1d0782b4fe3c6033c53e3979ed637d9bd6970ba7

    return (
        <div>
            Find Countries{" "}
            <input value={searchKeywords} onChange={handleKeywordChange} />
            
            {contents}
        </div>
    );
};

export default App;
