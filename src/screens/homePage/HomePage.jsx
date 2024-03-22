import React from "react";
import "./homePage.css";
import EventCard from "../../components/eventCard/EventCard.jsx";
import NavBar from "../../components/navBar/NavBar.jsx";


function HomePage({events}) {


const eventsPerPage = 8;  
const indexOfLastEvent =  eventsPerPage;
const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);



  console.log(events)
  return (
    <>
      <NavBar showSearch="show" user={user} />
      <div className="home">
        HomePage
        <div className="col">
          {currentEvents.map((event) => {
            return <EventCard
            id={event._id}
            imgSrc= {event.eventPicture}
            title={event.eventName}
            minPrice={event.eventMinPrice}
            maxPrice={event.eventMaxPrice}
            date= {event.eventDate}
            description= {event.eventCity}
            buttonText="Learn More"
            linkToTicket={event.eventTickets}
            key={event._id}
          />
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
