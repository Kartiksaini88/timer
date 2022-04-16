import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 useEffect(()=>{
  var set =  setInterval(()=>{
     setCount((prevValue)=>{
       if(prevValue >=20){
         clearInterval(set)
         return "Timer is reached on its limit"
       }
       return prevValue+1
     })
   },1000);
   return ()=>{
     clearInterval(set)
   }
 },[])


  return (
    <div className="App">
     <div><h1>{count}</h1></div>
     <button onClick={()=>{clearInterval(set)}}>START</button>
    
    </div>
  )
}

export default App
