const Header = ({course}) => {
  return (
      <h1>{course.name}</h1>
  )
}

const Part = ({part}) => {
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  )
}

const TotalCourse = ({course}) => {
  let totalCourse = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return  <b>Total of {totalCourse} exercises.</b>
}

const Content = ({course}) => {
  
  return (
    <div>
      <ul>
        {course.parts.map((part, id) => <Part key={id} part={part} />)}
      </ul>

      <TotalCourse course={course} /> 
    </div>
  )
}



const Course = ({course}) => {
  
  return (
    <div>
      <Header course={course} />    
      <Content course={course} />
    </div>
  )
}

const App = () => {
 
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 11
      }
    ]
  }

  return <Course course={course} />

}

export default App;
