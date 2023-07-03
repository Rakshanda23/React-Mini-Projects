import React from "react";
import ReactDOM from "react-dom";

export default function Card({img, country, Location, place, startdate, enddate, info}){
    return(
        <div className="container">
            <div className="img-container">
                <img src={img} className="img"></img>
            </div>
            <div className="data">
                <div className="section1">
                    <img src="images/icon.svg" className="icon"></img>
                     &nbsp; <p className="country">{country}</p>
                    <a href={Location} className="location" target="_blank"> View On Google Map</a>
                    
                </div>
                <h2 className="place">{place}</h2>
                <p className="date">{startdate} - {enddate}</p>
                <p className="info">{info} </p>
            </div>
        </div>


        
    )
}