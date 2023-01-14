import { useState, useEffect } from "react"
import PersonForm from "./components/PersonForm"
import FilterContact from "./components/FilterContact"
import Persons from "./components/Persons"
import personService from "./services/persons"

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [contents, setContents] = useState([])

  
  useEffect(() =>{
      personService
        .getAll()
        .then(existingData => {
            setPersons(existingData)
            setContents(existingData)
          }
      )
    }
  ,
  []);

  useEffect(() => setContents(persons), [persons])


  const addName = (event) =>{
    event.preventDefault()
    if (persons.find(person => person.name === newName)){
      alert(`${newName} is already added to the phonebook.`)
    }
    else{
      const newPersonObject = {
        name: newName, 
        number: newNumber,
      }

      personService
        .create(newPersonObject)
        .then(returnedObject => {
            setPersons(persons.concat(returnedObject))
            setNewName('')
            setNewNumber('')
          }
        )
        .catch(error => console.log('Server could not save the new person data to the DB'))
        
    }

  }


  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }


  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }


  const filterContact = (event) => {
    if (event.target.value.length === 0){
      setContents(persons)
    }else{
      const filtered = persons.filter(person =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
      setContents(filtered)
    }
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterContact filterContact={filterContact} />

      <h2>Add a new contact</h2>
      <PersonForm 
        addName={addName} 
        newName={newName}
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />

      <h2>Contacts</h2>
      <Persons members={contents} />
    </div>
  )
}

export default App;
