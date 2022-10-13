const Header = (course) => {
  return (
    <div>
      <h1>{course.title}</h1>
    </div>
  )
}

const Content = (part) => {
  return (
    <div>
      <p>
        {part.name} {part.exercise}
      </p>
    </div>
  )
}

const Total = (allExcercises) => {
  return (
    <div>
      <p>
        Number of exercises {allExcercises.excercise1 + allExcercises.excercise2 + allExcercises.excercise3}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header title={course} />
      <Content name={part1} exercise={exercises1} />
      <Content name={part2} exercise={exercises2} />
      <Content name={part3} exercise={exercises3} />
      <Total excercise1={exercises1} excercise2={exercises2} excercise3={exercises3} />
    </div>
  )
}

export default App;
