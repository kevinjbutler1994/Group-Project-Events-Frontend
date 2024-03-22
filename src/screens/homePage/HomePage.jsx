import React from "react";
import "./homePage.css";
import EventCard from "../../components/eventCard/EventCard.jsx";
import NavBar from "../../components/navBar/NavBar.jsx";

function HomePage({events}) {
  console.log(events)
  return (
    <>
      <NavBar showSearch="show" user={user} />
      <div className="home">
        HomePage
        <div className="col">
          {events.map((event) => {
            {console.log(event)}
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
          />
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
