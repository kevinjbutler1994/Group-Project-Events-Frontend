import React from "react";
import "./homePage.css";
import EventCard from "../../components/eventCard/EventCard.jsx";
import NavBar from "../../components/navBar/NavBar.jsx";

function HomePage({ events, user, favorites, setToggle }) {
  const eventsPerPage = 8;
  const indexOfLastEvent = eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <>
      <NavBar showSearch="show" user={user} />
      <div className="home">
        HomePage
        <div className="col">
          {currentEvents.map((event) => {
            let isFavorited = favorites.some((fav) => fav.eventId._id == event._id)
            let favoriteId = favorites.find((fav) => fav.eventId._id == event._id)?._id
            return (
              <EventCard
                favoriteId={favoriteId}
                id={event._id}
                imgSrc={event.eventPicture}
                title={event.eventName}
                minPrice={event.eventMinPrice}
                maxPrice={event.eventMaxPrice}
                date={event.eventDate}
                description={event.eventCity}
                buttonText="Learn More"
                linkToTicket={event.eventTickets}
                isFavorited={isFavorited}
                key={event._id}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
