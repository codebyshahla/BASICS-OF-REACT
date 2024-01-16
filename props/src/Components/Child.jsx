import React, { useContext } from "react";
import { Context } from "react";

function Child() {
  const {count,SetCount} = useContext(userContext)
  return
   <>
   <button onClick={()=>(SetCount(count+1))}>addCount</button>
   <p>count is {count}</p>
  </>;
}

export default Child;
