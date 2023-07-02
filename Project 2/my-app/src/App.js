  import React from "react"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Card from "./Card"
import Carddata from "./Carddata"
import Challenges from "./Components/Challenges"

export default function App(){

  const cardComponent = Carddata.map(carddt => {
    return (
      <Card 

     // {...carddt}

      img = {carddt.img}
        rating = {carddt.rating}
        country = {carddt.country}
        name = {carddt.name}
        price = {carddt.price}
        openspot = {carddt.openspot}
      
      />
    )
  })  

  return(
    <div>
      <Header />
      <Hero />
      <div className="flex">          
      
      {cardComponent}
        
      
      </div>    
    </div>
  )
  
}

// export default function App(){
//   return(
//     <div>
//         <Challenges />
//     </div>
//   )
// }