import { useState } from "react";


const Header = (props) => <h1>{props.text}</h1>

const Buttons = ({onClick, text}) => <button onClick={onClick}>{text}</button> 


const StatisticsLine = (props) => {
  const isEmpty = (obj) => Object.keys(obj).length === 0
  if (isEmpty(props.total) && 
    isEmpty(props.average) && 
    isEmpty(props.percentage)){
    return (
      <div>
        <p>{props.text} {props.value}</p>
      </div>
    )
  }
  else if(!isEmpty(props.total)){
    return (
      <div>
        <p>{props.text} {props.total[0] + props.total[1] + props.total[2]}</p>
      </div>
    )
  }
  else if(!isEmpty(props.average)){
    const averageText = "The Average Score (good: " + props.average[0] + ", neutral: " + props.average[1] + ", bad: " + props.average[2] + ") is : "; 
    return (
      <div>
        <p>{averageText} {(props.average[0] + props.average[1] + props.average[2]) / 3}</p>
      </div>
    )
  }
  else if(!isEmpty(props.percentage)){
    const percent = props.percentage[0] / (props.percentage[0] + props.percentage[1] + props.percentage[2]);
    const displayText = 'The percentage of positive feedback :  '
    if(isNaN(percent)){
      return (
        <p>
          {displayText}0%
        </p>
      )
    }
    return (
      <div>
        <p>{displayText} {(props.percentage[0] / (props.percentage[0] + props.percentage[1] + props.percentage[2]) ) * 100}%</p>
      </div>
    )
  }
}

const Statistics = (props) => {
  const {good, neutral, bad} = props

  if(good === 0 && neutral === 0 && bad === 0)
    return <p></p>
  return (
    <div>
      <Header text='Statistics' />
      <StatisticsLine text='Good' value={good} total={{}} average={{}} percentage={{}} />
      <StatisticsLine text='Neutral' value={neutral} total={{}} average={{}} percentage={{}} />
      <StatisticsLine text='Bad' value={bad} total={{}} average={{}} percentage={{}} />      
      <StatisticsLine text='The Total Feedbacks are : ' total={[good, neutral, bad]} average={{}} percentage={{}} />
      <StatisticsLine average={[good, neutral, bad]} total={{}} percentage={{}} />
      <StatisticsLine percentage={[good, neutral, bad]} total={{}} average={{}} />
    </div>

  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)  

  return (
    <div>
      <Header text='Give Feedback' />
      <Buttons onClick={increaseGood} text='good' />
      <Buttons onClick={increaseNeutral} text='neutral' />
      <Buttons onClick={increaseBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
