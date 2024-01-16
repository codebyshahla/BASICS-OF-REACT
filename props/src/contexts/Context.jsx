import React, { createContext, useState } from 'react'

export  const userContext = createContext()
function Context({children}) {
    const [count,setCount] = useState(0)
  return (
    <div>
      <userContext.Provider value={{count,setCount}}>
        {children}
      </userContext.Provider>
    </div>
  )
}

export default Context
