import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Pokemon} from "./Component/Pokemon"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pokemon/>
    </div>
  )
}

export default App
