const DisplayCountryDetails = (props) => {
    
    const {countriesData, aCountry} = props

    const countryData = countriesData.find((country) =>
        country.name.common.includes(aCountry)
    );



    
    return (
        <div>
            <h1>{countryData.name.common}</h1>
            <p>Capital {countryData.capital[0]}</p>
            <p>Area {countryData.area}</p>
            <b>Languages</b>
            <ul>
                {Object.values(countryData.languages).map((value, id) => (
                    <li key={id}>{value}</li>
                ))}
            </ul>
            <img src={countryData.flags.png} alt="Country's flag" />
        </div>
    )

}

export default DisplayCountryDetails;
