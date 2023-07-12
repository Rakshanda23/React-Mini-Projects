import React from "react"
import ReactDoM from "react-dom"
import profileMetaData from"./profileData"

export default function Hero(props){


    const [myId, setMyId] = React.useState(0)

    const allProfileMetaData = profileMetaData

    function getProfileData(){
        setMyId(prev => {
            if(prev==allProfileMetaData.length-1)
                return 0;
            else
                return prev+1;
        })
    }
    

    return(
        <div>
            <button onClick={getProfileData}>Profile</button>
            <div className="card">
                <img src={allProfileMetaData[myId].url} className="image"/>
                <p className="title">{allProfileMetaData[myId].name}</p>
                <p className="desc">{allProfileMetaData[myId].desc}</p>
            </div>
        </div>
            
    )
}