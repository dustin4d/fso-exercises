import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "555-555-5555"}
  ]) 
  const [newName, setNewName] = useState('Insert a name')
  const [newNumber, setNewNumber] = useState('Insert a phone number')

  const addPerson = (event) => {
    event.preventDefault() //Don't refresh the page
    const personObj = {
      name: newName,
      number: newNumber,
    }
    //If personObj.name is the same as any person.name
    //Alert user and prevent submit
    persons.some(person => person.name === personObj.name) 
    ? alert(`${personObj.name} is already in the phonebook.`)
    : setPersons(persons.concat(personObj)) && setNewName('')
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input value={newName} onChange={handleName} />
          <br />
          Number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit" 
          onClick={addPerson}>
          Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <li key={person.name}>{person.name} @ {person.number}</li>)}
    </div>
  )
}

export default App