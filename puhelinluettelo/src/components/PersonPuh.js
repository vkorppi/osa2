

import React from 'react'


const PersonPuh   = ({person,removePerson}) => {

  return (
      <>
        
        <p>{person.name}{person.number} <button onClick={removePerson}>Remove contact</button></p>
        
      </>
    )

}


export default PersonPuh;