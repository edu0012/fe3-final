import React from "react";
import { Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const {state, dispatch} = useContextGlobal()
  const location = useLocation()
  const addFav = (item)=>{
    let favs = [];
    try {
      const favoritesJSON = localStorage.getItem('favs')
      if (favoritesJSON) {
        favs = JSON.parse(favoritesJSON);
      }
    } catch (error) {
      console.error('Error  JSON:', error)
    }
    let existe = false

    favs.map(fav => {
      if(item.id == fav.id) {
        existe = true
        alert(`"${fav.name}" ya existe en los favoritos`)
      }
  })
  
  if (!existe) {
    dispatch({type: 'ADD_FAV', payload: item})
    alert(`"${name}" Dentista Agregado a favoritos.`)
  }   
} 
const theme = state.theme ?  'dark' :  ''


  return (
    <div className={`card ${theme}`}>
        <Link to={'/dentist/' + id }>
          <img src="./images/doctor.jpg" alt="doctor" className="card-image"/>
          <h3>{name}</h3>
          <h4>{username}</h4>
        </Link>

        {
          location.pathname == '/' &&
          <button onClick={() => addFav({name, username, id})} className="favButton">Add fav</button>
        }
    </div>
  );
};

export default Card;
