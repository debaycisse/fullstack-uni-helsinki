const Header = (course) => {
  return (
    <div>
      <h1>{course.title}</h1>
    </div>
  )
}

const Part = (part) => {
  return (
    <div>
      <p>
        {part.name} {part.excercise}
      </p>
    </div>
  )
}

const Content = (parts) => {
  return (
    <div>
      <Part name={parts.part1} excercise={parts.excercise1} />
      <Part name={parts.part2} excercise={parts.excercise2} />
      <Part name={parts.part3} excercise={parts.excercise3} />
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
      <Content part1={part1} part2={part2} part3={part3} excercise1={exercises1} excercise2={exercises2} excercise3={exercises3}  />
      <Total excercise1={exercises1} excercise2={exercises2} excercise3={exercises3} />
    </div>
  )
}

export default App;
