import React from "react"
import Hero from "./Hero.js"
import profileData from "./profileData"

export default function App(){
    // const profileComponent = profileData.map(item =>{
    //     return(
            
    //         <Hero
    //             url={item.url}
    //             name={item.name}
    //             desc={item.desc}
    //         />
    //     )
    // })
    return(
        <main>
                
        {/* {profileComponent} */}
        <Hero />
            </main>
    )
}