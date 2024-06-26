import { useState } from 'react'
import EightBall from "./EightBall"
import answers from './answers';

import './App.css'

function App(){
  return (
      <div>
          <EightBall answers = {answers}/>
      </div>

  )
}


export default App
