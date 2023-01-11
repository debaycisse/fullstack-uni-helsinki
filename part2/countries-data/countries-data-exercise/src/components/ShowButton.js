const ShowButton = (props) => {
    const {displayCountryDetails} = props
    return (
        <button onClick={displayCountryDetails}>show</button>
    )
}

export default ShowButton;
