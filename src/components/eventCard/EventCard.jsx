import React from "react";

import "./eventCard.css";

// const EventCard = ({
  function EventCard({
    imgSrc,
    imgAlt,
    title,
    price,
    date,
    description,
    buttonText,
    link,
    
  })
  
  {
// }) => {
  return (
    <div className = 'card-div'>
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {price && <p className="card-price">{price}</p>}
      {date && <p className="card-date">{date}</p>}
      {description && <p className="card-description">{description}</p>}
      {buttonText && link && (
        <a href={link} className="card-btn">
          {buttonText}
        </a>
      )}
    </div>
    </div>
  );
};
  


export default EventCard