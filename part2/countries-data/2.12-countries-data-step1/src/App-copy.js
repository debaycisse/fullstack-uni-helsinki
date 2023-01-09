import { useState, useEffect } from "react"
import PersonForm from "./components/PersonForm"
import FilterContact from "./components/FilterContact"
import Persons from "./components/Persons"
import axios from "axios"

const App = () => {
  const allPersons = [
    { name: 'Arto Hellas', phoneNumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 }
  ]

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  
  useEffect(() =>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
          setPersons(response.data)
      })
  },[]);


  const addName = (event) =>{
    event.preventDefault()
    if (persons.find(person => person.name === newName)){
      const message = `${newName} is already added to the phonebook.`
      alert(message)
    }
    else{
      const newNameObject = {
        name: newName, 
        phoneNumber: newNumber,
        id: persons.length + 1 
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


  const filterContact = (event) => {
    if (event.target.value.length === 0){
      setPersons(allPersons)
    }else{
      const filtered = persons.filter(person =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
      setPersons(filtered)
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
      <Persons members={persons} />
    </div>
  )
}

export default App