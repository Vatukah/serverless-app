import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [message,setMessage]= useState("")

  useEffect(()=>{
    (async () => {
      try {
        const res = await fetch('/api/hello');
        
        // Throw an error if the response status is not OK
        if (!res.ok) {
          throw new Error(`API call failed with status: ${res.status}`);
        }

        const data = await res.json();
        setMessage(data.message); // Assuming your serverless function returns { message: "Hello World" }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Failed to load message.");
      }
    })();
  },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{message}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
