
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  
  return (
<div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
    <button onClick={()=>setColor('red')} className='ouline-none px-4 py-1 rounded-full ' style={{backgroundColor:"red"}}>RED</button>
    <button onClick={()=>setColor('green')} className='ouline-none px-4 py-1 rounded-full ' style={{backgroundColor:"green"}}>Green</button>
    <button onClick={()=>setColor('pink')} className='ouline-none px-4 py-1 rounded-full ' style={{backgroundColor:"pink"}}>PINK</button>
    <button onClick={()=>setColor('blue')} className='ouline-none px-4 py-1 rounded-full ' style={{backgroundColor:"blue"}}>BLUE</button>
    <button onClick={()=>setColor('orange')} className='ouline-none px-4 py-1 rounded-full ' style={{backgroundColor:"orange"}}>ORANGE</button>

  </div>
</div>
</div>
  )
}

export default App
