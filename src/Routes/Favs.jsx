import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContextGlobal()
  const theme = state.theme ?  'dark' :  ''

  let favs = [];


  try {
    const favoritesJSON = localStorage.getItem('favs')
    if (favoritesJSON) {
      favs = JSON.parse(favoritesJSON);
    }
  } catch (error) {
    console.error('Error JSON:', error)
  }
  console.log(favs)
  return (
    <div className={`page ${theme}`}>
      <h1>Dentists Favs</h1>
      <div className='card-grid' >
        {favs.map(fav => <Card key={fav.id} id={fav.id} name={fav.name} username={fav.username}/>)}
      </div>
    </div>
  );
};

export default Favs;