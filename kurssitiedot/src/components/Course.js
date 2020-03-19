
import React from 'react'

const Header  = ({ name }) => {
    return (
      <>
        <h1>
           {name}
        </h1>
      </>
    )
  }

  const Part   = ({ part }) => {

    
    return (
    
        <p>
          {part.name}{part.exercises}
        </p>
   
     
    )
  }

  const CoursesCount   = ({ count }) => {

    return (
    
        <p>
          Amount of exercises:{count}
        </p>  
    )
  }

  const Content   = ({parts}) => {

   
    const allparts = parts.map(part =>   <Part
        key={part.id}
        part={part}
      />
  )
   
    return (
      <>
       {allparts}
       <CoursesCount count={parts.length} />
      </>
    )
  }

  const Course   = ({ course }) => {

   

    return (
      <>


        <Header name={course.name} />
        <Content parts={course.parts}  />

      </>
    )
  }

  export default Course