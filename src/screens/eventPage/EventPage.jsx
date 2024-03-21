import {useState,useEffect} from "react";
import NavBar from "../../components/navBar/NavBar.jsx";
import "./eventPage.css";
import { getEvent, getEvents } from "../../services/events.js";
import { useParams } from "react-router-dom";

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

function EventPage() {
  const [event, setEvent] = useState({})

  let {id} = useParams()
  console.log(id)
  const fetchEvent = async () => {
    
    const oneEvent = await getEvent(id)
    console.log(oneEvent)
    setEvent(oneEvent)
  }

useEffect(() => {
    fetchEvent()
}, [])

console.log(event)


    return (
      <>
       <NavBar showSearch="noShow"/>
       <div className="eventContainer">
          <img src={event.eventPicture}></img>
          <p>Name: {event.eventName}</p>
          <p>Date and Time: {event.eventDate} {event.eventTime}</p>
          <p>Venue: {event.eventVenue}</p>
          <p>Price Min - Max: ${event.eventMinPrice} - ${event.eventMaxPrice}</p>
          <button>
           <a href={event.eventTickets}>Buy Here</a>
          </button> 
       </div>
      </>
    )
  }
  
  export default EventPage