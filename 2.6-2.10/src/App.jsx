import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('Insert a name')

  const addPerson = (event) => {
    event.preventDefault() //Don't refresh the page
    const personObj = {
      name: newName,
    }
    //If personObj.name is the same as any person.name
    //Alert user and prevent submit
    persons.some(person => person.name === personObj.name) 
    ? alert(`${personObj.name} is already in the phonebook.`)
    : setPersons(persons.concat(personObj)) && setNewName('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" 
          onClick={addPerson}>
          Add
          </button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
    </div>
  )
}

export default App