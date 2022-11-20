import { useState } from "react"
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber:'040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    if (persons.find(person => person.name === newName)){
      const message = `${newName} is already added to the phonebook.`
      alert(message)
    }
    else{
      const newNameObject = {
        name: newName, phoneNumber: newNumber
      }
      setPersons(persons.concat(newNameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      <div>
        {persons.map((person) => <li key={person.name}>{person.name} {person.phoneNumber}</li>)}
      </div>
    </div>
  )
}

export default App