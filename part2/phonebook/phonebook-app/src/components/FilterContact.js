const FilterContact = (props) => {

    const {filterContact} = props

    return(
        <>
            filter shown with <input onChange={filterContact} />
        </>
    )
}

export default FilterContact;