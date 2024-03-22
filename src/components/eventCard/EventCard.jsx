import React from "react";
import {createFavorite} from "../../services/favorites.js";

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
         
     <div className = 'card-div'>
    <div className="card-container">
    <img src={imgSrc}/>
      <p>{title}</p>
      <p>{`From $${minPrice} to $${maxPrice}`}</p>
      <p>{date}</p>
      <p>{description}</p>
      <p>{buttonText}</p>
      <p>{linkToTicket}</p>
      <button onClick={onCreateFavorite}>Add to your favorites</button>
    </div>
 
   </div>
  
    </>
  );
};
  


export default EventCard