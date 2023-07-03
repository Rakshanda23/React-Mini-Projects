import REact from "react"
import ReactDOM from "react-dom"

export default function Header(){
    return(
        <navbar>
            <div className="nav-1">
                <img src="./images/meme.png" className="meme-icon"/>
                <h1>Meme Generator</h1>
            </div>            
            <p>React Course - Project 4</p>
        </navbar>
    )
}