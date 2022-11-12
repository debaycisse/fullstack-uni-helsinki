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

  export default Course;