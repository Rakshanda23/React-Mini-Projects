import React from "react";
import ReactDOM from "react-dom";
import Header from "./Component/Header.js"
import Card from "./Component/Card.js"
import Carddata from "./Carddata.js"


export default function App(){
  
  const CardComponent = Carddata.map( item => {
      return(
        <Card
        img= {item.img}
        country= {item.country}
        Location= {item.Location}
        place= {item.place}
        startdate= {item.startdate}
        enddate= {item.enddate}
        info= {item.info}

        />
      )
  }  )

  return(
    <div>
      <Header/>
        <main>
          {CardComponent}
        </main>
      
    </div>
  )
}