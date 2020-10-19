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
        <h4>
          {date}
        </h4>
        </section>
        <p>"{comment}" </p>
        <p>-{client} </p>
      </div>
    </div>
  );
};
export default ReviewCard;
