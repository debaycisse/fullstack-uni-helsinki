const Persons = (props) => {

    const {members} = props

    return (
        <div>
            {members.map((member) => <li key={member.name}>{member.name} {member.phoneNumber}</li>)}
        </div>
    )

}


export default Persons;