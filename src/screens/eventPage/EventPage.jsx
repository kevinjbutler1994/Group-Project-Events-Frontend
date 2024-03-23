import {useState,useEffect} from "react";
import NavBar from "../../components/navBar/NavBar.jsx";
import "./eventPage.css";
import { getEvent } from "../../services/events.js";
import { useParams } from "react-router-dom";

function EventPage() {
  const [event, setEvent] = useState({})
  let {id} = useParams()

  const fetchEvent = async () => {
  const oneEvent = await getEvent(id)
  setEvent(oneEvent)
  }

useEffect(() => {
    fetchEvent()
}, [])

console.log(event)
    return (
      <>
       <NavBar showSearch="noShow"/>
       <div className="eventPageContainer">
          <img className="eventPageImage" src={event.eventPicture}></img>
          <p>Name: {event.eventName}</p>
          <p>Date and Time: {event.eventDate} {event.eventTime}</p>
          <p>Venue: {event.eventVenue}</p>
          <p>Price Min - Max: ${event.eventMinPrice} - ${event.eventMaxPrice}</p>
          <button className="eventPageLink">
           <a href={event.eventTickets}>Buy Here</a>
          </button>
       </div>
      </>
    )
  }
  export default EventPage