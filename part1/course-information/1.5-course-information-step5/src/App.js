const Header = (course) => {
  return (
    <div>
      <h1>{course.title.name}</h1>
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

const Content = (allParts) => {
  return (
    <div>
      <Part name={allParts.part[0].name} excercise={allParts.part[0].exercises} />
      <Part name={allParts.part[1].name} excercise={allParts.part[1].exercises} />
      <Part name={allParts.part[2].name} excercise={allParts.part[2].exercises} />
    </div>
  )
}

const Total = (allExcercises) => {
  return (
    <div>
      <p>
        Number of exercises {allExcercises.part[0].exercises + allExcercises.part[1].exercises + allExcercises.part[2].exercises}
      </p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises:  10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  


  return (
    <div>
      <Header title={course} />
      <Content part={course.parts}  />
      <Total part={course.parts} />
    </div>
  )
}

export default App;
