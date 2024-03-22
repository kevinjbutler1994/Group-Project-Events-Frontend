import React from "react";
import "./homePage.css";
import EventCard from "../../components/eventCard/EventCard.jsx";
import NavBar from "../../components/navBar/NavBar.jsx";
import {useState, useEffect} from 'react'


function HomePage({events}) {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect (()=>{
    setSearchResults(events)

},[])


  const handleChange = (e) => {
    setSearchInput(e.target.value);
    const filteredEvents= events?.filter((event) =>
      event.eventName.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(filteredEvents);
    
    setSearchResults(filteredEvents);
  };
  console.log(events)
  return (
    <>
      <NavBar showSearch="show" handleChange={handleChange} setSearchInput={setSearchInput} searchInput={searchInput}/>
      <div className="home">
        HomePage
        <div className="col">
          {searchResults.map((event) => {
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
