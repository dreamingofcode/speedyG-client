import React from 'react';
import mansTools from '../icons/manTools.png';
function reviews() {
  return (
    <div className="reviews-pg">
      <section>
        <img alt="man-tools-vector" src={mansTools} />
        <div className="hero-txt">
          <h2>SPEEDY GONZALEZ</h2>
          <h1> With a reputation of exellence</h1>
        </div>
      </section>
      <div className="hero">
        <div className=" review-introduction flex">
          <h1>Want to Know what it is like working with us?</h1>
          <h2>Read our Most recent customer reviews</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Are you a recent customer?</h1>
          <button>Write a Review!</button>
        </div>
      </div>{' '}
    </div>
  );
}
export default reviews;
