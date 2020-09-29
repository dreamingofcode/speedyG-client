import React from 'react';
import ImageSlider from './imageSlider'
import '../style.css';
import drywallIcon from '../icons/drywallicon.png';
import framingIcon from '../icons/carpentryIcon.png';
import paintingIcon from '../icons/paintingIcon.png';
import nextArrow from '../icons/nextArrow.png';




function Services() {
  
  return (
    <div className="services">
      <h2>Services</h2>
      <div className=" services-card flex">
        <div className="landing-carpentry">
          <img src={framingIcon} alt="stack-of-drywall" />
          <h1>Carpentry & Framing</h1>
        </div>
        <div className="landing-drywall">
          <img src={drywallIcon} alt="stack-of-drywall" />
          <h1>Drywall & Taping</h1>
        </div>
        <div className="landing-painting">
          <img src={paintingIcon} alt="stack-of-drywall" />
          <h1>Painting & Finishing</h1>
        </div>{' '}
      </div>

      <section className="services-framing">
        <div className=" services-introduction flex">
          {' '}
          <h3>Framing & Carpentry</h3>
          <p>
            Framing refers to the process of building a supportive and skeletal
            structure to give shape and a foundational support to other building
            processes. Framing is a crucial part of all construction and
            requires the upmost precision and the highest levels of standards.
          </p>
          <br />
          <h3>What we offer</h3>
          <ul>
            <li>Metal Framing</li>
            <li>Wood Framing</li>
            <li>Wall Framing</li>
            <li>Door Installtion</li>
            <li>Window Installation</li>
          </ul>
        </div>
        <ImageSlider section={"Framing & Carpentry"}/>
      </section>

      <section className="services-drywall">
        <ImageSlider section={"Drywall & Taping"} />
        <div className=" services-introduction2 flex">
          <p>
            Drywall treatments are among the newest standards of construction
            because of their effective fire prevention, ease of installment, and
            reduced cost.
          </p>
          <br />
          <h3>What we offer</h3>
          <ul>
            <li>Metal Framing</li>
            <li>Wood Framing</li>
            <li>Wall Framing</li>
            <li>Soffit Framing</li>
            <li>Door Installtion</li>
            <li>Casing & Moldings</li>
            <li>Framing & Carpentry</li>
            <li>Baseboard & Baseshoe</li>
          </ul>
        </div>
      </section>
      <section className="services-painting">
        <div className=" services-introduction flex">
          <p>
            Drywall treatments are among the newest standards of construction
            because of their effective fire prevention, ease of installment, and
            reduced cost.
          </p>
          <br />
          <h3>What we offer</h3>
          <ul>
            <li>Metal Framing</li>
            <li>Wood Framing</li>
            <li>Wall Framing</li>
            <li>Soffit Framing</li>
            <li>Door Installtion</li>
            <li>Casing & Moldings</li>
            <li>Framing & Carpentry</li>
            <li>Baseboard & Baseshoe</li>
          </ul>
        </div>
        <ImageSlider section={"Painting & Finishing"}/>
      </section>
    </div>
  );
}

export default Services;
