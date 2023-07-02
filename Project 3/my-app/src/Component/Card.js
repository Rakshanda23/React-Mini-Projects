import React from "react";
import ReactDOM from "react-dom";

export default function Card(){
    return(
        <div className="container">
            <div className="img-container">
                <img src="./images/korea.jpg" className="img"></img>
            </div>
            <div className="data">
                <div className="section1">
                    <p className="country">Korea</p>
                    <p className="location">View On Google Map</p>
                </div>
                <h3 className="place">Seoul</h3>
                <p className="date">23 Feb 2023 - 28 Feb 2023</p>
                <p className="info">
                Korea is a culturally rich and historically significant peninsula in East Asia. It is divided into two distinct nations, North Korea and South Korea, each with its own unique political and social systems. Known for their advancements in technology, vibrant pop culture, and delicious cuisine, Korea has a fascinating blend of tradition and modernity.
                </p>
            </div>
        </div>
    )
}