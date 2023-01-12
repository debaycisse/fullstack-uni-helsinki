import Weather2 from "./Weather2";

const DisplayCountryDetails = (props) => {
    
    const {countriesData, aCountry} = props

    const countryData = countriesData.find((country) =>
        country.name.common.includes(aCountry)
    );

    const capital = countryData.capital[0]
    const countryName = countryData.name.common



    
    return (
        <div>
            <h1>{countryName}</h1>
            <p>Capital {capital}</p>
            <p>Area {countryData.area}</p>
            <b>Languages</b>
            <ul>
                {Object.values(countryData.languages).map((value, id) => (
                    <li key={id}>{value}</li>
                ))}
            </ul>
            <img src={countryData.flags.png} alt="Country's flag" />
            <Weather2 countryCapital={capital} />
        </div>
    )

}

export default DisplayCountryDetails;
