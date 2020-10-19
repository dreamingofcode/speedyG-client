import React from 'react';
import ReviewSlider from './reviewSlider';
import mansTools from '../icons/manTools.png';
import './reviews.css';
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
          <h1>Read our Most Recent Customer Reviews</h1>
        </div>
      </div>{' '}
      <ReviewSlider />
      <div className="hero"></div>
    </div>
  );
}
export default reviews;
