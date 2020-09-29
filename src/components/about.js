import React, { Fragment } from 'react';
import frank from '../images/frank.png';
import logo from '../icons/logo.png';
function About() {
  return (
    <Fragment>
      <section className="about">
        <div className="about-image">
          {/* <img src={logo} alt="speedy-logo" /> */}
        </div>
        <div className="about-text flex">
          <h3>Our story</h3>
          <div className="about-story">
            <p>
              Speedy Gonzalez Drywall & Taping Inc was founded by Frank Mota
              back in 2009. This new company was based around it's sister
              company, Speedy Gonzalez Painting Inc , after the demand for high
              quality work demanded expandsion. Speedy Gonzalez Drywall & Taping
              quickly became well known in the chicagoland area due to the
              standard of quality, and committment that followed its birth.
            </p>
          </div>
          <div className="about-story">
            <p>
              {' '}
              The Company is well versed in many remodeling and repair
              procedures for both Commercial and Residential projects. Our top
              priority is our customer's satisfaction, therefore, Speedy's team
              is made up of true specialist.{' '}
            </p>
          </div>
          <div className="about-story">
            <p>
              Our team is more like a family, filled with essential characters
              with many years of loyalty and devotion towards the company's
              motto. Our team has heart and soul. We understand the efforts of
              our clients in the pursuit of improvement, growth, and change.
              Speedy stands for nothing else but perserverance and self
              improvement through a strong work ethic.
            </p>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-text2 flex">
          <h3>Our Leader</h3>
          <div className="about-story">
            <p>
              Speedy Gonzalez Drywall & Taping Inc was founded by Frank Mota
              back in 2009. Frank and his crew quickly became well known in the
              chicagoland area due to their committment to their work and
              expertise.
            </p>
          </div>
          <div className="about-story">
            <p>
              The Company is well versed in many remodeling and repair
              procedures for both Commercial and Residential projects. Our top
              priority is our customer's satisfaction, therefore, Speedy's team
              is made up of true specialist. Individuals specialize in a
              specific trade and are
            </p>
          </div>
          <div className="about-story">
            <p>
              Speedy Gonzalez was founded by Bernardo Gonzalez back in 2009.
              Bernardo and his son Frank Mota quickly became well known in the
              chicagoland area due to their committment to their work.
            </p>
          </div>
        </div>
        <div className="about-image2">
    
          <img src={frank} alt="franks-headshot" />
          <p>Frank Mota</p>
          <img src={frank} alt="franks-headshot" />
          <p>Checo</p>
          <img src={frank} alt="franks-headshot" />
          <img src={frank} alt="franks-headshot" />
        </div>
      </section>
    </Fragment>
  );
}
export default About;
