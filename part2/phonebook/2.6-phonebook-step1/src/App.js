import { useState } from "react"
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    const newNameObject = {
      name: newName
    }
    setPersons(persons.concat(newNameObject))
    setNewName('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <li key={person.name}>{person.name}</li>)}
      </div>
    </div>
  )
}

export default App