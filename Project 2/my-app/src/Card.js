import React from "react"

// export default function Card(props){
//     let img = props.img;
//     let rating = props.rating;
//     let country = props.country;
//     let name = props.name;
//     let price = props.price;
//     return(
//         <div className="flex">
//             <div className="outer-div">
//             <div className="div-pic">
//                 <img src={img} className="pic" />
//             </div>
            
//             <div className="rating">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-star-fill icon" viewBox="0 0 16 16">
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                 </svg>
//                 <p>{rating}</p><p className="rating-info">(30)-{country}</p>
//             </div>
//             <p>{name}</p>
//             <div className="price">
                
//                 <p><span><b>From {price} </b></span> / person</p>

//             </div>
//             </div>
//         </div>
        
//     )
// }


//---------------------------------------------------------------------------------------
export default function Card({img, rating, country, name, price, openspot}){
       
        let tag
        if (openspot === 0 )
        {
            tag = "SOLD OUT"
        }
        else if(country === "Online")
        {
            tag = "ONLINE"
        }

        return(
            <div className="flex">
                <div className="outer-div">
                <div className="div-pic">
                   { tag && <div className="div-pic-tag">{tag}</div> }             
                    <img src={img} className="pic" />
                   
                </div>
                
                {/* <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-star-fill icon" viewBox="0 0 20 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <p>{rating}</p><p className="rating-info">(30)-{country}</p>
                </div> */}

                <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-star-fill icon" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <div className="rating-box">
                        <p>{rating}</p><p className="rating-info">(30)-{country}</p>
                        </div>
                        
                </div>

                <p>{name}</p>
                <div className="price">
                    
                    <p><span><b>From {price} </b></span> / person</p>
    
                </div>
                </div>
            </div>
            
        )
    }
//----------------------------------------------------------------------------


// export default function Card(props){
//     let img = props.carddt.img;
//     let rating = props.carddt.rating;
//     let country = props.country;
//     let name = props.carddt.name;
//     let price = props.carddt.price;  
//     let openspot = props.carddt.openspot;

//     let tag
//     if (openspot === 0 )
//     {
//         tag = "SOLD OUT"
//     }
//     else if(country === "Online")
//     {
//         tag = "ONLINE"
//     }

//     return(
//         <div className="flex">
//             <div className="outer-div">
//             <div className="div-pic">
//                { tag && <div className="div-pic-tag">{tag}</div> }             
//                 <img src={img} className="pic" />
               
//             </div>
            
//             <div className="rating">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-star-fill icon" viewBox="0 0 16 16">
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                 </svg>
//                 <p>{rating}</p><p className="rating-info">(30)-{country}</p>
//             </div>
//             <p>{name}</p>
//             <div className="price">
                
//                 <p><span><b>From {price} </b></span> / person</p>

//             </div>
//             </div>
//         </div>
        
//     )
// }