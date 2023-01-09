import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    
    const [searchKeywords, setSearchKeywords] = useState('');
    const [countriesData, setCountriesData] = useState([]);

    const handleKeywordChange = (event) => {
        setSearchKeywords(event.target.value);
    }


    
    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountriesData(response.data)
                // console.log(countriesData[0].name.common.toLowerCase().includes('na'))
            })
    }, [])


    return (
        
        <div>
            Find Countries <input value={searchKeywords} onChange={handleKeywordChange} />

            {/* {console.log(countriesData.name.common)} */}


            <p>
                {/* {countriesData.find((country, id) => country[id].name.common.toLowerCase().includes(searchKeywords))} */}
            </p>
        </div>

    )
}

export default App;