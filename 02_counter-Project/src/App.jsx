import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    
    // counter++;
    console.log("Value added", Math.random());
    console.log("Counetr check in site console", counter);
    setCounter(++counter)
    
  }
  const removeValue = () => {
    setCounter(--counter)
  }

  return (
    <>
     <h1>Abhirup</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br></br>
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
               