import { useState } from "react";

function App() {
  const [color, setColor] = useState("slategray");

  return (
    <div
      className="w-full h-screen flex items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          🔴
        </button>

        <button
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          🟢
        </button>

        <button
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          🔵
        </button>

        <button
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl"
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          💗
        </button>

        <button
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl"
          style={{ backgroundColor: "black" }}
          onClick={() => setColor("black")}
        >
          ⚫
        </button>

        <button
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-black text-xl"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          🟡
        </button>

        <button
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl"
          style={{ backgroundColor: "purple" }}
          onClick={() => setColor("purple")}
        >
          🟣
        </button>

        <button
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-black text-xl"
          style={{ backgroundColor: "cyan" }}
          onClick={() => setColor("cyan")}
        >
          🔷
        </button>
      </div>
    </div>
  );
}

export default App;
// if you want to run App2 component then just rename the file  App2.jsx to App1.jsx