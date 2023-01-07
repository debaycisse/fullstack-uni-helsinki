const PersonForm = (props) =>{

  const {addName, newName, handleChangeName, newNumber, handleChangeNumber} = props



  return (
    <form onSubmit={addName}>
    <div>
      name: <input value={newName} onChange={handleChangeName} />
      number: <input value={newNumber} onChange={handleChangeNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
    </form>

  )

}

export default PersonForm;
