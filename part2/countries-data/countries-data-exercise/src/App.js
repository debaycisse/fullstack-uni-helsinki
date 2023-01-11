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
        
    
    
    

    // setContents(displayContents)
    // console.log('search results', searchResults)
    console.log('displayContents', displayContents)

    const [contents, setContents] = useState(displayContents);
    

    return (
        <div>
            Find Countries{" "}
            <input value={searchKeywords} onChange={handleKeywordChange} />
            
            {contents}
        </div>
    );
};

export default App;
