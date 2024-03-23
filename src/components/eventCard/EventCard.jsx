import React from "react";
import {createFavorite, removeFavorite } from "../../services/favorites.js";
import "./eventCard.css"
import { Link,useNavigate} from 'react-router-dom'
import { getFavorites } from "../../services/favorites.js"

// const EventCard = ({
  function EventCard({
    id,
    favoriteId,
    imgSrc,
    title,
    minPrice,
    maxPrice,
    date,
    description,
    buttonText,
    linkToTicket,
    isFavorited,
    setToggle
  })
  {

    const navigate = useNavigate()
    // const [isFav, setIsFav] = useState(false)

    // const toggle = async() =>{
    //   const pullFavorites = await getFavorites();
    //   const found = pullFavorites.find((element) => element.eventId === id)
    //   if(found){
    //     return setIsFav(true)
    //   }else{
    //     return setIsFav(false)
    //   }
    // }

    const onCreateFavorite = async () => {
      try {
        const favorite = await createFavorite(id)
        setToggle(prev => !prev)
        console.log("THis worked")
      } catch (error) {
        console.log(error)
        console.log("Did not work")
      }
      
    }
    
    const onRemoveFavorite = async () => {      
      try {
        await removeFavorite(favoriteId)
        setToggle(prev => !prev)
      } catch (error) {
        console.log(error)
        console.log("Did not work")
      }
        
    }

  return (
    <>
      <div className = 'card-div'>
      <div className="card-container">
      <Link to={`/events/${id}`}>
        <img className="card-img" src={imgSrc}/>
          <p className="card-title">{title}</p>
          <p className="card-price">{`From $${minPrice} to $${maxPrice}`}</p>
          <p className="card-date">{date}</p>
          <p className="card-description">{description}</p>
      </Link>
          {
            isFavorited ?
            <button className="card-btn" onClick={onRemoveFavorite}>Remove from your favorites</button>
            :
            <button className="card-btn" onClick={onCreateFavorite}>Add to your favorites</button>
          }
        </div>
      </div>
    </>
  );
};
  


export default EventCard