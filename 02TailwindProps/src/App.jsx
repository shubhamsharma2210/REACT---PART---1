import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/Button'

import './App.css'

function App() {


  return (
    <>
     
     <h1 className="text-3xl bg-red-300 font-bold underline">
      Hello world!
    </h1>
    <Button btnText="visitMe" />
    <Button btnText="hume dabao" />
    <Button btnText="clickMe" />
    <Button btnText="signup karo" />
    </>
  )
}

export default App
