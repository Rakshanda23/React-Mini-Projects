import React from "react";
import ReactDOM from "react-dom";
import Header from "./Component/Header.js"
import Card from "./Component/Card.js"

export default function App(){
  return(
    <div>
      <Header/>
        <main>
          <Card/>

        </main>
      
    </div>
  )
}