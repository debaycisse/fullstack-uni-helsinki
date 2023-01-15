import { useState, useEffect } from "react"
import PersonForm from "./components/PersonForm"
import FilterContact from "./components/FilterContact"
import Persons from "./components/Persons"
import personService from "./services/persons"
import SuccessNotification from "./components/SuccessNotification"

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [contents, setContents] = useState([])
  const [notification, setNotification] = useState(null)
  const [updatedNotification, setUpdatedNotification] = useState(null)

  
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
    
    const selectedPerson =  persons.find(person => person.name === newName)

    if (persons.find(person => person.name === newName && person.number !== newNumber)){
      // alert(`${newName} is already added to the phonebook.`)
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        const updatedPersonObject = { ...selectedPerson, number: newNumber }
        personService
          .update(selectedPerson.id, updatedPersonObject)
          .then(returnedUpdatedPersonObj => {
            setPersons(persons.map(person => person.name !== selectedPerson.name? person : returnedUpdatedPersonObj))
            setNewName('')
            setNewNumber('')
            setUpdatedNotification(updatedPersonObject.name)
            setTimeout(() => setUpdatedNotification(null), 5000)
          })
      }
    }
    else if (persons.find(person => person.name === newName)){
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
            setNotification(newPersonObject.name)
            setTimeout(() => setNotification(null), 5000)
          }
        )
        .catch(error => console.log('Server could not save the new person data to the DB'))
        
    }

  }


  const deletePerson = (event) => {

    const personName = event.target.value;
    const personID = event.target.id;

    if(window.confirm(`Do you want to delete ${personName}`)){
      personService
        .deletePerson(personID)
        .then(statusCode => {
            if(statusCode === 200){
              setPersons(persons.filter(person => person.name !== personName))
            }
          }
          )
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
      <SuccessNotification objectProperty={notification} message={' added successfully'} />
      <SuccessNotification objectProperty={updatedNotification} message={' updated successfully'} />
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
      <Persons members={contents} deletePerson={deletePerson} />
    </div>
  )
}

export default App;
