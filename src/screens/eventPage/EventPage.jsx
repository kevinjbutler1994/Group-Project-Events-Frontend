import React from "react";
import NavBar from "../../components/navBar/NavBar.jsx";
import "./eventPage.css";
// import { boilerPlateData } from "./data.js";

// export default () => {
//   const generateCardsFromData = collection => {
//     return collection.map(item => {
//       return (
//         <div key={item.id}>
//           <h2>{item.name}</h2>
//           <h4>{item.price}</h4>
//           <p>{item.description}</p>
//         </div>
//       );
//     });
//   };

//   return <>{generateCardsFromData(boilerPlateData)}</>;
// };

function EventPage({events}) {
  console.log(events)
    return (
      <>
      <NavBar showSearch="noShow"/>
      <div>EventPage</div>
      </>
    )
  }
  
  export default EventPage