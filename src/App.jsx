import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KrishiSahayak from './components/Krishi';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <KrishiSahayak/>
    </>
  )
}

export default App
