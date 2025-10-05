import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>This is custom MyApp</h1>
    </div>
  )
}
// const reactElement = {
//   type:"a",
//   props:{
//     href:"https://www.google.com",
//     target:"_blank",
//   },
//   children:"Click me to visit Google"
// }

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Click me to visit Google</a>
)

const anotherUser ="Rishu awadhiya"
const reactElement = React.createElement(
  "a",
  {
    href:"https://www.google.com",
    target:"_blank",
  },
  "Click me to visit Google",
  anotherUser
)

createRoot(document.getElementById('root')).render(

    
    // <App />
    // <MyApp />
    // MyApp()
    reactElement
 
)
