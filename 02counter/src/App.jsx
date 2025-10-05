import { use, useState } from 'react' // ye hooks ko use krne k liye import krna pdta h
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [cnt , setCounter] = useState(0)

//  let cnt = 15

 let addValue = () =>{
    // console.log("Value added",cnt);
    // cnt++;
    // console.log(cnt);
    if(cnt < 20)setCounter(cnt + 1);
 }
 let removeValue = () =>{
    // console.log("Value removed",Math.random());
    // cnt--;
    // console.log(cnt);
    if(cnt > 0)setCounter(cnt - 1);
 }
  return (
    <>
    <h1>Counter</h1>

    <h2>Cnt : {cnt}</h2>
    <button onClick={addValue} disabled={cnt === 20}>Add : {cnt} </button>
    <br /> <br />
    <button onClick={removeValue} disabled={cnt === 0}>remove : {cnt} </button>
    <footer>
      <p>Current Count: {cnt}</p>
    </footer>
    </>
  )
}

export default App
