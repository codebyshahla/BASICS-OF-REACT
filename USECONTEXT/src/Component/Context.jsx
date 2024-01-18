import React, { createContext, useState } from 'react'
import Component2 from './Component2';
  
export const userContext =createContext()

function Context() {

  const [counter,setCounter] = useState(0);

  return (
    <div>
      <userContext.Provider value={{counter , setCounter}}>
           <Component2/>
      </userContext.Provider>
    </div>
  )
}

export default Context
