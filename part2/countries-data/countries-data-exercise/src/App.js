import { useState, useEffect } from "react";
import axios from "axios";
import DisplayCountries from "./components/DisplayCountries";
import DisplayCountryDetails from "./components/DisplayCountryDetails";

const App = () => {
    const [searchKeywords, setSearchKeywords] = useState("");
    const [countriesData, setCountriesData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [contents, setContents] = useState('');
    
    
    
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

        setSearchResults(resultNames);
        
    };
    
    
    const setDisplayContents = () => {
        /**************************************************************************
            Logic used to obtain value for the contents that will be displayed.
        **************************************************************************/

        if(searchKeywords.length === 0){

            setContents('')

        } else if (searchResults.length > 10) {

            setContents(<p>Too many matches, specify another filter.</p>)
            
        } else if (searchResults.length <= 10 && searchResults.length > 1) {

            setContents(<DisplayCountries searchResults={searchResults} countriesData={countriesData} />)
            
        } else if (searchResults.length === 1) {

            setContents(<DisplayCountryDetails countriesData={countriesData} aCountry={searchResults} />)
            
        }

    }

    
    /***************************************************************************************************************
        Re-rendring to occur every time any of the state hook changes. E.g for the searchKeywords, if the letter  
        inputted in the input field changes, such as adding more letters or removing from the inputted letters. 
    ***************************************************************************************************************/
    useEffect(setDisplayContents, [searchKeywords, countriesData, searchResults])
    

    return (
        <div>
            Find Countries{" "}
            <input value={searchKeywords} onChange={handleKeywordChange} />
            
            {contents}
        </div>
    );
};

export default App;
