import { useState } from 'react'
import './App.css'

function App() {
  let [Counter, setcounter] = useState(0);
  return (
    <>
      <div className='main' style={{border:"2px solid black", padding:"0px 100px",color:"white"}}>
        <h1>WelCome to Counter</h1>
        <button onClick={() => {
          setcounter(Counter - 1)
          Counter == 0 ? setcounter(0) : Counter
        }}>-1</button>
        <button onClick={() => setcounter(0)}>Reset</button>
        <button onClick={() => setcounter(Counter + 1)}>+1</button>
        <h1>{Counter}</h1>
        <h1>{Counter} Is {Counter % 2 == 0 ? "Even" : "Odd"} Number </h1>
        <h1>{Counter} Prime Number:- {(Counter % 2 == 0) &&(Counter!==1)? "False" : "True"}</h1>
      </div>

    </>
  )
}

export default App
