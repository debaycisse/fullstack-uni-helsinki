import { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const anecdoteWithHighestVotes = (props) => {
  const [points, anecdotes] = props
  const maxAnecdoteValue = Math.max.apply(Math, points)
  const maxAnecdoteId = points.indexOf(maxAnecdoteValue)

  return (
    <p>{anecdotes[maxAnecdoteId]} <br />has {points[maxAnecdoteId]} vote(s).</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [points, increasePoint] = useState([0, 0, 0, 0, 0, 0, 0])

  const [selected, setSelected] = useState(0)
  

  const selectAnecdotes = () => {
    const anecdotesId = Math.floor(Math.random() * (anecdotes.length-1));
    setSelected(anecdotesId)
  }
  

  const addVote = () => {
    const pointsCopy = [...points]
    pointsCopy[selected] += 1
    increasePoint(pointsCopy)
  }



  return (
    <div>
      {anecdotes[selected]} <br />has {points[selected]} vote(s).
      <br />
      <Button text='Vote' onClick={addVote} /> 
      <Button text='Next Anecdote' onClick={selectAnecdotes} />
      <anecdoteWithHighestVotes points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App;