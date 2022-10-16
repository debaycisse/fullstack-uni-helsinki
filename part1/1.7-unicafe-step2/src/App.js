import { useState } from "react";

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const Header = (props) => <h1>{props.text}</h1>

  const Buttons = ({onClick, text}) => <button onClick={onClick}>{text}</button> 
  

  const Content = (props) => <p>{props.category} {props.count}</p>

  const TotalFeedBack = (props) => {
    const feedcounts = props.feedbacks
    return (
      <p>
        The Total Feedbacks are : {feedcounts[0] + feedcounts[1] + feedcounts[2]}
      </p>
    )
  }
  
  const AverageScore = (props) => {
    const feedcounts = props.feedbacks;
    const averageText = "The Average Score (good: " + feedcounts[0] + ", neutral: " + feedcounts[1] + ", bad: " + feedcounts[2] + ") is : "; 
    return (
      <p>
        {averageText} {(feedcounts[0] + feedcounts[1] + feedcounts[2]) / 3}
      </p>
    )
  }
  
  const PercentagePositiveFeed = (props) => {
    const feedcounts = props.feedbacks;
    const percentage = feedcounts[0] / (feedcounts[0] + feedcounts[1] + feedcounts[2]);
    if (isNaN(percentage)){
      return (
        <p>
          The percentage of positive feedback : 0%
        </p>
      )
    }
    return (
      <p>
        The percentage of positive feedback :  {percentage * 100}%
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
      <TotalFeedBack feedbacks={[good, neutral, bad]} />
      <AverageScore feedbacks={[good, neutral, bad]} />
      <PercentagePositiveFeed feedbacks={[good, neutral, bad]}/>
    </div>
  )
}

export default App;
