import { useState } from "react";


const Header = (props) => <h1>{props.text}</h1>

const Buttons = ({onClick, text}) => <button onClick={onClick}>{text}</button> 


const StatisticsLine = (props) => {
  const isEmpty = (obj) => Object.keys(obj).length === 0
  if (isEmpty(props.total) && 
    isEmpty(props.average) && 
    isEmpty(props.percentage)){
    return (
      <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
      </tr>
    )
  }
  else if(!isEmpty(props.total)){
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.total[0] + props.total[1] + props.total[2]}</td>
      </tr>
    )
  }
  else if(!isEmpty(props.average)){
    const averageText = "Average : "; 
    return (
      <tr>
        <td>{averageText}</td>
        <td>{((props.average[0] + props.average[1] + props.average[2]) / 3).toFixed(1)}</td>
      </tr>
    )
  }
  else if(!isEmpty(props.percentage)){
    const percent = props.percentage[0] / (props.percentage[0] + props.percentage[1] + props.percentage[2]);
    const displayText = 'Positive :  '
    if(isNaN(percent)){
      return (
        <tr>
          <td>{displayText}</td>
          <td>0%</td>
        </tr>
      )
    }
    return (
      <tr>
        <td>{displayText}</td>
        <td>{((props.percentage[0] / (props.percentage[0] + props.percentage[1] + props.percentage[2]) ) * 100).toFixed(1)}%</td>
      </tr>
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
      {/* Displaying Statics in Table form. */}
      <table>
        <tbody>
          <StatisticsLine text='Good' value={good} total={{}} average={{}} percentage={{}} />
          <StatisticsLine text='Neutral' value={neutral} total={{}} average={{}} percentage={{}} />
          <StatisticsLine text='Bad' value={bad} total={{}} average={{}} percentage={{}} />      
          <StatisticsLine text='Total : ' total={[good, neutral, bad]} average={{}} percentage={{}} />
          <StatisticsLine average={[good, neutral, bad]} total={{}} percentage={{}} />
          <StatisticsLine percentage={[good, neutral, bad]} total={{}} average={{}} />
        </tbody>
      </table>
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
