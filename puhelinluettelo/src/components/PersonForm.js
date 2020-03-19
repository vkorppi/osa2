
import React from 'react'

const PersonForm   = ({incrementP,name,nameChange,phnumber,phnumberChange}) => {

  return (

         <div>
      <form  onSubmit={incrementP}>
      
      <div>
        name: 
      <input
        value={name} 
        onChange={nameChange}
        />
      </div>


      <div>
        number: 
      <input
        value={phnumber} 
        onChange={phnumberChange}
        />
      </div>

      <div>
        <button type="submit">add</button>
      </div>

  
    </form>



      </div>
      
    )

}

  export default PersonForm;