import React from "react"
import ReactDOM from "react-dom"

export default function App(){

  const [count, setCount] = React.useState(0)
  let data =0 

  function handleDecrement(){
     setCount(count - 1)
  }

  function handleIncrement(){
    setCount(count+1)
  }

  return(
    <main>
      <button onClick={handleDecrement} className="section1">
        -
      </button>
      <div className="section2">
        <p>{count}</p>
      </div>
      <button onClick={handleIncrement} className="section1">
        +
      </button>
    </main>
  )
}