//import React from "react"
//import ReactDOM from "react-dom"

function CustomComponent(){
    return (
        <div>
        <img src="react-logo.png" alt="hello" width="100px"></img>
        <h1>Fun Fact About React</h1>
        <ul>
            <li>Was 1st released in </li>
            <li>was originally created by jordan walke</li>
            <li>has well over 100k stars on github</li>
            <li>is maintained by fb</li>
            <li>power thousands of enterprises app, including mobile app</li>
        </ul>
    </div>
    )
}

ReactDOM.render(
    <CustomComponent/>
    ,
    document.getElementById("root")
)