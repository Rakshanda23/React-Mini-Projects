import React from "react"
import ReactDOM from "react-dom"
import MemeData from "../MemeData"

export default function Hero(){

    const [memeImage, setMemeImage] = React.useState()

    function getMemeImage(){
        const randomNo = Math.floor(Math.random() * MemeData.data.memes.length)
        setMemeImage(MemeData.data.memes[randomNo].url)
    }


    return(
        <main>
            <div className="section-1">
                <input type="text" placeholder="Top Text" className="input top-text"/>
                <input type="text"  placeholder="Bottom Text" className="input bottom-text"/>
            </div>
            
            <button className="section-2" onClick={getMemeImage}>
                 Get New Meme Image
            </button>
            <div className="section-3">
                <img className="imgg" src={memeImage}></img>
            </div>
        </main>
    )
}





// const [memeImage,setMemeImage] = React.useState(" ")    

// function getMemeImage(){       
//              const randomNumber = Math.floor(Math.random() * MemeData.data.memes.length)                
//             setMemeImage(MemeData.data.memes[randomNumber].url)
// }


    // function getMemeImage(){
    //     const memeArray = MemeData.data.memes
    //     const randomNumber = Math.floor(Math.random() * memeArray.length) 
    //     // url = memeArray[randomNumber].url;
    //     setMemeImage(memeArray[randomNumber].url)
    // }
