import { createContext, useReducer, useContext } from "react";
import { reducer } from "./reducer";
import axios from "axios"
import { useEffect } from "react"


export const initialState = {
  theme: false, 
  data: []
}
export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_LIST', payload: res.data}))
  }, [])
  
  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)