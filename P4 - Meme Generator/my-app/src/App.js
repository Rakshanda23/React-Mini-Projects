import React from "react"
import ReactDOM from "react-dom"
import Header from "./Components/Header.js"
import Hero from "./Components/Hero.js"

export default function App(){
  return(
    <div>
      <Header/>
      
      <div className="container">        
        <Hero/>
      </div>

    </div>
  )
}