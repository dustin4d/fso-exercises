const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of react',
      exercises: 10,
    },

    {
      name: 'Using props to pass data',
      exercises: 7,
    },

    {
      name: 'State of a component',
      exercises: 14,
    },
  ]

  }
    return (
    <div>
      <Header name={course.name}/>
      <Content part1={`${course.parts[0].name} -- ${course.parts[0].exercises}`}
               part2={`${course.parts[1].name} -- ${course.parts[1].exercises}`}
               part3={`${course.parts[2].name} -- ${course.parts[2].exercises}`}
      />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1}  />
      <Part part={props.part2}  />
      <Part part={props.part3}  />
    </>
  )  
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.totalExercises}</p>
  )
}

const Part = (props) => {
  return <p> {props.part} </p>
}

export default App