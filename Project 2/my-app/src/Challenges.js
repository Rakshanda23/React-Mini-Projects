import React from "react"

export default  function Hello(){

    // const fisrtname = "Rakshanda"
    // const lastname = "Giri"

    // return(
    //     <h1>Hello {fisrtname} {lastname} !</h1>
    // )

    const date = new Date()
    const hour = date.getHours()
    let timeofday

    if(hour < 12){
        timeofday= "Good Morning"
    }
    else if(hour < 4){
        timeofday = "Good Afternoon"
    }
    else if(hour < 8){
        timeofday = "Good Evening"
    }
    else{
        timeofday = "Good Night"
    }

    return(
        <h1>{timeofday}</h1>
    )

}