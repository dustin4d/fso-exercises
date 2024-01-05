import { useState } from 'react'
import Header from './Header.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('Insert a name')
  const [newNumber, setNewNumber] = useState('Insert a phone number')
  const [search, setSearch] = useState([])
  const [showAll, setShowAll] = useState(false)

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

  const searchPerson = (event) => {
    event.preventDefault() //Prevent refresh
    persons.some(person => person.name === search
    ? console.log(person.name)
    : console.log("Found, but not matched.")
    )
  }


  //There's probably a better way to write this, but each event
  //needs its own handler for different states, so this is what we got
  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <Header section="Phonebook"/>
        <p>Search</p>
        <form>
          <input value={search} onChange={handleSearch}/>
          <button onClick={searchPerson}>Search</button>
        </form>

      <Header section="Add New" />
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

      <Header section='Numbers'/ >
        {persons.map(person => <li key={person.name}>{person.name} @ {person.number}</li>)}
    </div>
  )
}

export default App