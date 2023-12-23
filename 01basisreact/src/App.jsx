

import { useState } from 'react'
import './App.css'

function App() {

    const [count, setCount] = useState('0')
    const decreaseHandler = () =>{
        setCount(count-1);
    }
    const increaseHandler = () => {
      setCount(count + 1)
    }
    const resetHandler = () =>{
      setCount(0)
    }
  return (
    <>
       <div className='counter'>
          <button onClick={decreaseHandler}>click me</button>
          <h1>{count}</h1>
          <button onClick={increaseHandler}>click me</button>
       </div>
       <div className='reset'>
        <button onClick={resetHandler}>Reset</button>
       </div>
      </>
     
  )
}

export default App
