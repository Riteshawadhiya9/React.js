import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card1 from "./components/card1";
import Card2 from "./components/Card2";

function App() {
  const [count, setCount] = useState(0);

  let myObj ={
    name : "Ritesh",
    age : 21,
    city : "Indore"
  }
  let arr = [1,2,3,4,5];
  return (
    <>
      <h1 className="bg-blue-500 text-white p-4 rounded text-lg mb-4">
        Tailwind Test
      </h1>

      <Card1 userName = "Ritesh" obj={myObj} arr={arr} />
      <Card2/>
    </>
  );
}

export default App;
