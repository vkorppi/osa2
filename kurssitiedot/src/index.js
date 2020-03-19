import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Course from './components/Course'

  const AllCourses   = ({ courses }) => {

    const Alltblcourses = courses.map(course =>   <Course
        key={course.id}
        course={course}
      />
  )

    return (
    
        <p>
          {Alltblcourses}
        </p>  
    )
  }

const App = () => {
 
    const courses = [
        {
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
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
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
  
    return (
      <div>
      
        <AllCourses courses={courses} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

