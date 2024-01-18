import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Context from './Component/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Context/>
    </>
  )
}

export default App
