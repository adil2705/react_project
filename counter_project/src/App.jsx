import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)
  const addValue=()=>{
    setCounter(counter+1)
  }

  const remValue= ()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>My first app</h1>
    <h3>Counter App</h3>
    <h5>LETS COUNT:{counter}</h5>
    <button onClick={addValue}>Add</button>
    <br />
    <button onClick={remValue}>Remove</button>
    </>
  )
}

export default App
