import React from 'react';

const ReviewCard = ({ property }) => {
  const {
    index,
    comment,
    client,
    date,
    rating,
    location
  } = property;

  return (
    <div id={`card-${index}`} className="card">
     
        <span className="index">{index + 1}</span>
      <div className="details">
        <section>
        <h5>{client} from {location}
        </h5>
          
        </section>
        <h6>"{comment}" </h6>
        <h6>-{date}</h6>
      </div>
    </div>
  );
};
export default ReviewCard;
