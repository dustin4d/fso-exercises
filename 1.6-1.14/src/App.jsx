// Imports
import { useState } from 'react'

function App() {
    const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  // Init votes as a preset, zero-filled array to avoid conditional spaghetti later on.
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [topVote, setTopVote] = useState('')

  // Get random index of `anecdotes` and send to state
  const newSelection = () => {
    const anecdotesCopy = [...anecdotes] // Make a copy of the anecdotes array
    const sel = Math.floor(Math.random() * anecdotesCopy.length) // Get a random selection of that array
    setSelected(sel) // Save the index to state
  }

  const newVote = () => {
    const votesCopy = [...votes] // Grab a copy of the state
    votesCopy[selected] += 1 // Increment the current index of the selected quote
    setVotes(votesCopy) // Update the state

    const maxIndex = votesCopy.indexOf(Math.max(...votesCopy)) // Get index of a max value, determined by Math.max and spread value
    setTopVote(anecdotes[maxIndex]) // Update topVote state with button click, same batch as setVote
  }
   
  // Controller for retrieving anecdote
  const getQuote = () => {
    return (anecdotes[selected])
  }

  return (
    <div>
    <p>Programmer and web developer quotes:</p>
    {getQuote()}
    <br/>
    <p>Votes: {votes[selected]}</p>
    <button onClick = {() => newSelection()}>New Quote</button>
    <button onClick = {() => newVote()}>Vote</button>

    <h1>Top Quote</h1>
    <>
      <p>{Math.max(...votes)} votes:</p>
      {topVote}
    </>
    </div>
  )
}

export default App