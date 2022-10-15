import { useState } from "react";

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const Header = (props) => <h1>{props.text}</h1>

  const Buttons = ({onClick, text}) => <button onClick={onClick}>{text}</button> 
  

  const Content = (props) => {
    return (
      <p>
        {props.category} {props.count}
      </p>
    )
  }

  const increaseGood = () => setGood(good + 1)
  
  const increaseNeutral = () => setNeutral(neutral + 1)

  const increaseBad = () => setBad(bad + 1)  



  return (
    <div>
      <Header text='Give Feedback' />
      <Buttons onClick={increaseGood} text='good' />
      <Buttons onClick={increaseNeutral} text='neutral' />
      <Buttons onClick={increaseBad} text='bad' />
      <Header text='Statistics' />
      <Content category='Good' count={good} />
      <Content category='Neutral' count={neutral} />
      <Content category='Bad' count={bad} />
    </div>
  )
}


export default App;