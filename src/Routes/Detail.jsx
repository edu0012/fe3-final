import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


const Detail = () => {
  const {state} = useContextGlobal()
  const theme = state.theme ?  'dark' :  ''
  const [dentist, setDentist] = useState({})
    
  const params = useParams()

  const url = "https://jsonplaceholder.typicode.com/users/" + params.id

  useEffect(() => {
    axios(url)
    .then(res => setDentist(res.data))
  }, [])

  return (
    <div className={`page ${theme}`}>
      <h1>Detail Dentist id </h1>
      <table>
        <tbody>
          <tr>
            <td>Nombre:</td>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <td>Telefono:</td>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <td>Sitio Web:</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail