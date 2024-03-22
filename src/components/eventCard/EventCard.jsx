import React from "react";
import {createFavorite} from "../../services/favorites.js";
import "./eventCard.css"
import { Link } from 'react-router-dom'

// const EventCard = ({
  function EventCard({
    id,
    imgSrc,
    title,
    minPrice,
    maxPrice,
    date,
    description,
    buttonText,
    linkToTicket
  })
  {

    const onCreateFavorite = async () => {
      
      
      
      console.log(id)

      try {
        console.log("This is first")
        const favorite = await createFavorite(id)
        console.log("THis worked")
      } catch (error) {
        console.log(error)
        console.log("Did not work")
      }
        
    }

// }) => {
  return (
    // <div className = 'card-div'>
    // <div className="card-container">
    //   {imgSrc && imgAlt && (
    //     <img src={imgSrc} alt={imgAlt} className="card-img" />
    //   )}
    //   {title && <h1 className="card-title">{event.eventName}</h1>}
    //   {price && <p className="card-price">{price}</p>}
    //   {date && <p className="card-date">{date}</p>}
    //   {description && <p className="card-description">{description}</p>}
    //   {buttonText && link && (
    //     <a href={link} className="card-btn">
    //       {buttonText}
    //     </a>
    //   )}
    // </div>
    // </div>
    <>
    <Link to={`/events/${id}`}>
      <div className = 'card-div'>
      <div className="card-container">
      <img className="card-img" src={imgSrc}/>
        <p className="card-title">{title}</p>
        <p className="card-price">{`From $${minPrice} to $${maxPrice}`}</p>
        <p className="card-date">{date}</p>
        <p className="card-description">{description}</p>
        <button className="card-btn" onClick={onCreateFavorite}>Add to your favorites</button>
      </div>
  
      </div>
    </Link>
    </>
  );
};
  


export default EventCard