import React, { useContext } from 'react'
import { userContext } from './Context'

function Component2() {
   const {counter,setCounter} = useContext(userContext)
  return (
    <div>
        <h1>{counter}</h1>
      <button onClick={()=>setCounter((counter)=> counter + 1)}>CLICK HERE{counter}</button>
    </div>
  )
}

export default Component2
