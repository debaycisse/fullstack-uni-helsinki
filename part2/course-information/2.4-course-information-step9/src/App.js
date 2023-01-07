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



const Course = ({courses}) => {
  return(
    courses.map((course, id) => {
      return(
      <div key={id}>
        <Header course={course} />    
        <Content course={course} />
      </div>
      )
    })
  )
}

 
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
  
}

export default App;
