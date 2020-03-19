import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom';
import PersonForm from './components/PersonForm'
import PhonenumberList from './components/PhonenumberList'

import Personremote from './services/Personremote'
import './index.css'

const App = () => {

  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phonNumber: 113
}
  ])
  
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setnewPhoneNumber ] = useState('')
  const [infomessage, setInfo] = useState('')

  const ActionMessages = ({ mgsuser }) => {
	
    if (mgsuser === '') {
      return ''
    }
  
    return (
      <p className="info">
        {mgsuser}
      </p>
    )
    
    
  }

  useEffect(() => {

    Personremote
      .getPersons()
      .then(response => {
    
        setPersons(response.data)
      })
  }, [])
 

  const nameInputChange = (event) => {
    
    setNewName(event.target.value)
    
  }

  const PhoneNumberChange = (event) => {
    console.log(event.target.value)
    setnewPhoneNumber(event.target.value)
  }

  const incNewPerson = (event) => {
    event.preventDefault()
    var exists

    exists=persons.filter(person => person.name === newName).length > 0

   

    if(!exists) {
        const personPhoneNumber = {
            name: newName,
            number: newPhoneNumber
        }

      
        Personremote
            .postNewPerson(personPhoneNumber)
            .then(response => {
              
              setPersons(persons.concat(response.data))
              setNewName('')
              setnewPhoneNumber('')
              setInfo(`Added ${response.data.name}`)
              
              setTimeout(() => {
                setInfo('')
              }, 2000)


            })

       
    }
    else {
        alert(`${newName} is already in use`)
    }
  }

  const removePerson = id => {

    
    const person = persons.find(p => p.id === id)

    if(window.confirm(`Do you really want to remove ${person.name}`))
    {
      Personremote
    .removePerson(id)
    .then(response => {
      
      
      setPersons(persons.filter(p => p.id !== id))
      setNewName('')
      setnewPhoneNumber('')

      setInfo(`Removed ${person.name}`)
              
              setTimeout(() => {
                setInfo('')
              }, 2000)


    })
    
    }
  
    
   
  }


  return (
    <div>
      <h2>Phonebook</h2>


      <ActionMessages mgsuser={infomessage}/>

      <PersonForm incrementP={incNewPerson} name={newName} nameChange={nameInputChange} 
        phnumber={newPhoneNumber} phnumberChange={PhoneNumberChange} />

      

      <h2>Numbers</h2>

      <PhonenumberList persons={persons} removePerson={removePerson}/>

    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'));

