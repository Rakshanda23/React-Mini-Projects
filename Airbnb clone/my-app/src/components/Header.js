import React from "react"
import reactlogo from "../images/react-logo.png"

export default function Header (){
    return(
        <header className="nav">
            <div className="logo">
                <img src={reactlogo} className="nav-logo"/>
                <h3>React : Project 1</h3>
            </div>
           
            <ul className="nav-items">
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

