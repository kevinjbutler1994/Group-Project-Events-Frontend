import NavBar from "../../components/navBar/NavBar.jsx";
import "./favoritePage.css";
import EventCard from "../../components/eventCard/EventCard.jsx";

function FavoritePage({user, favorites, setToggle}) {
  return (
      <>
        <NavBar showSearch="noShow" user={user}/>
        <div>
          <h1>{`Welcome ${user?.name} to your favorites!`}</h1>
          <div>
            {favorites.length > 0 && favorites?.map((favorite) => (
              <EventCard
                key={favorite._id}
                favoriteId={favorite._id}
                id={favorite.eventId._id}
                imgSrc={favorite.eventId.eventPicture}
                title={favorite.eventId.eventName}
                minPrice={favorite.eventId.eventMinPrice}
                maxPrice={favorite.eventId.eventMaxPrice}
                date={`${favorite.eventId.eventDate} --- ${favorite.eventId.eventTime}`}
                buttonText="Remove from favorites"
                linkToTicket={favorite.eventId.eventTickets}
                isFavorited={true}
                setToggle={setToggle}
              />
            ))}
          </div>
        </div>
      </>
  );
}

export default FavoritePage;
