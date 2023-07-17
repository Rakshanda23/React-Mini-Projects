import React from "react"
import ReactDOM from "react-dom"
import MemeData from "../MemeData"

export default function Hero(){

    const [memeImage, setMemeImage] = React.useState({
        topText : "",
        bottomText : "",
        url: "https://i.imgflip.com/24y43o.jpg"

    })

    const [allMemeImages, setAllMemeImages] = React.useState(MemeData)

    function getMemeImage(){
        const memearray = allMemeImages.data.memes
        const randomNo = Math.floor(Math.random() * memearray.length)
        const url = memearray[randomNo].url
        setMemeImage(prev => {
            return{
                ...prev,
                url : url
            }
        })
    }

    const [tText,setTopText] = React.useState("")

    function handleTopText(e){
        setTopText(e.target.value)
        setMemeImage(prev => {
            return{
                ...prev,
                topText : tText
            }
        })
    }

    const [bText, setBottomText] = React.useState("")

    function handleBottomText(e){
        setBottomText(e.target.value)
        setMemeImage(
            prev=>{
                return{
                    ...prev,
                    bottomText : bText
                }
            }
        )
    }


    return(
        <main>
            <div className="section-1">
                <input type="text" placeholder="Top Text" value={tText} onChange={function(e){
                    handleTopText(e);
                }} className="input"/>
                <input type="text" placeholder="Bottom Text" value={bText} onChange={function(e){
                    handleBottomText(e);
                }} className="input "/>
            </div>
            
            <button className="section-2" onClick={getMemeImage}>
                 Get New Meme Image
            </button>
            <div className="section-3">
                <center><p className="text top-text">{tText}</p></center>
                <img className="imgg" src={memeImage.url}></img>
                <center><p className="text bottom-text">{bText}</p></center>
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
//ejfuhu