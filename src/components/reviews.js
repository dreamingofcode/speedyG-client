import React, { Fragment, useState } from 'react';
import ReviewSlider from './reviewSlider';
import mansTools from '../icons/manTools.png';
import ReviewModal from './reviewModal';
import './reviews.css';

function Reviews(){
  // new Date().toLocaleTimeString()
  const [index, setIndex] = useState(12);
  const [comment, setComment] = useState('');
  const [client, setClient] = useState('');
  const [date, setDate] = useState(new Date().toLocaleTimeString().toString());
  const [rating, setRating] = useState(3);
  const [location, setLocation] = useState('');
  console.log(comment,client,date,rating,location)
  return (
    <Fragment>
      <div className="reviews-pg ">
        <section>
          <img alt="man-tools-vector" src={mansTools} />
          <div className="hero-txt">
            <h2>SPEEDY GONZALEZ</h2>
            <h1> With a reputation of exellence</h1>
          </div>
        </section>
        <div className="hero flex">
          <div className=" review-introduction flex">
            <h1>Recent Customer Reviews</h1>
          </div>
        </div>
        <ReviewSlider />
        <div className="review-form">
          <h1></h1>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@mdo"
          >
            WRITE A REVIEW
          </button>
          <ReviewModal
          index={index}
            setIndex={setIndex}
            setComment={setComment}
            setClient={setClient}
            setDate={setDate}
            setRating={setRating}
            setLocation={setLocation}
          />
        </div>
      </div>{' '}
    </Fragment>
  )
}
export default Reviews;
