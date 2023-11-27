import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div className='container_item'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App
