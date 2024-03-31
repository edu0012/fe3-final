import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const {state, dispatch} = useContextGlobal()
  const {data} = state
  const theme = state.theme ?  'dark' :  ''


  return (
    <main className={`page ${theme}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map((item) => <Card key={item.id} name={item.name} id={item.id} username={item.username}/>)}
      </div>
    </main>
  )
}

export default Home