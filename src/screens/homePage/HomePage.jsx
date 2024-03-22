import React from "react";
import "./homePage.css";
import EventCard from "../../components/eventCard/EventCard.jsx";
import NavBar from "../../components/navBar/NavBar.jsx";
import {useState, useEffect} from 'react'



function HomePage({events}) {

  console.log(events)
  return (
    <>
      <NavBar showSearch="show" handleChange={handleChange} setSearchInput={setSearchInput} searchInput={searchInput}/>
      <div className="home">
        HomePage
        <div className="col">

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
