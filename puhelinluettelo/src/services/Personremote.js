import axios from 'axios'
const remoteURL = 'http://localhost:3001/Persons'

const getPersons = () => {
    return axios.get(remoteURL)
  }

  const postNewPerson = newperson => {
    return axios.post(remoteURL, newperson)
  }


  const removePerson = id => {


    return axios.delete(`${remoteURL}/${id}`, id)
  }
  
  export default { 
    getPersons: getPersons, 
    postNewPerson: postNewPerson,
    removePerson: removePerson
  }