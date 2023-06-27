import React, { createContext } from 'react'
import { useReducer } from 'react';
import apiData from '../ApiData'
import CardReducer from './Reducer';
export const Card = createContext();
const Context = ({children}) => {
 const cards = apiData.data
 console.log(cards)
 const[state,dispatch]= useReducer(CardReducer,{
    cards: cards,
    searchQuery:""
   })
  return (
    <Card.Provider value={{state,dispatch}}>
    {children}
        </Card.Provider>
  )  
}

export default Context