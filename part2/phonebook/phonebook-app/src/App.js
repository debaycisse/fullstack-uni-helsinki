import { useState, useEffect } from "react"
import PersonForm from "./components/PersonForm"
import FilterContact from "./components/FilterContact"
import Persons from "./components/Persons"
import axios from "axios"

const App = () => {
  // const allPersons = [
  //   { name: 'Arto Hellas', phoneNumber: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 }
  // ]

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [contents, setContents] = useState([])

  const baseUrl = 'http://localhost:3001/persons'

  
  useEffect(() =>{
    axios
      .get(baseUrl)
      .then(response => {
          setPersons(response.data)
          setContents(response.data)
      })
  },
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
        // id: persons.length + 1 
      }

      axios
        .post(baseUrl, newPersonObject)
        .then(response => {
              setPersons(persons.concat(response.data))
              setNewName('')
              setNewNumber('')
            }
        )
        .catch(error => console.log('Could not save data to db '))
        
    }
    
  }


  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }


  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }


  const filterContact = (event) => {
    // console.log('filter contact length : ', event.target.value.length)
    if (event.target.value.length === 0){
      setContents(persons)
      // console.log(contents)
      // setPersons(persons)
    }else{
      const filtered = persons.filter(person =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
      // setContents(persons)
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
