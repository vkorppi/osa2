

import React from 'react'
import PersonPuh from './PersonPuh'

const PhonenumberList   = ({persons,removePerson}) => {

   
    const allpersons = persons.map(person =>  
        
        <PersonPuh key={person.name} person={person} removePerson={() => removePerson(person.id)}/> 
    
      )  
        return (
          <>
           {allpersons}
          </>
        )
      }

      export default PhonenumberList;