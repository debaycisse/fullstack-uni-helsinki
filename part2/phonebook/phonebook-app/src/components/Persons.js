const Persons = (props) => {

    const {members, deletePerson} = props

    return (
        <div>
            {members.map((member) => <li key={member.id}>{member.name} {member.number} <button onClick={deletePerson} value={member.name} id={member.id}>delete</button> </li>)}
            
        </div>
    )

}


export default Persons;