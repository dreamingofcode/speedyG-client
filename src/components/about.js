import React, { Fragment } from 'react';
import frank from '../images/frank.png';
import bernardo from '../images/Bernardo.png';
import logo from '../icons/logo.png';
import logo2 from '../icons/speedylogo.png';
import contactImage from '../icons/contactImage.png';

function About() {
  return (
    <Fragment>
      <section className="about">
        <div className="about-image"></div>
        <div className="about-text flex">
          <h2>Our story</h2>
          <div className="about-story">
            <p>
              Speedy Gonzalez Drywall & Taping Inc was founded by Bernardo
              Gonzalez back in 2005. As of 2013 and as a result of the high
              demand for high quality work, Bernardo has passed down the company
              name to Frank Mota and has since rebranded under Speedy Gonzalez
              Painting Inc. Both companies remain under the same entity and
              typically work along side one another in sharing projects and
              their employee workforce. Speedy Gonzalez Drywall & Taping inc,
              under Frank Mota, remains well known in the chicagoland area due
              to the standard of quality, and committment that followed its
              birth.
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
          <h2>Our Team</h2>
          <div className="about-story">
            <p>
              Former president, Frank Mota, is without a doubt one of the most
              hard working individuals you will ever meet. He has been working
              in the remodeling and construction industry for 15 years and is
              well versed aside from being a genuine individual. His priority is
              both his employees and his customers alike. He is known for going
              above and beyond as he is a perfectionist at heart.
            </p>
          </div>
          <div className="about-story">
            <p></p>
          </div>
          <div className="about-story">
            <p>
              Speedy Gonzalez was founded by Bernardo Gonzalez back in 2005.
              Bernardo and Frank Mota quickly became well known in the
              chicagoland area due to their committment to their work. Bernardo
              rebranded and founded Speedy Gonzalez Painting inc in order to
              expand and provide clients more variety in a specilized manor.
              Both Companies are managed with the same principles of hard work
              and integrity.
            </p>
          </div>
        </div>
        <div className="about-image2">
          <img style={{height:"25rem"}} src={logo} alt="speedy gonzalez drywall & taping logo" />
          <div className="about-image1">
            <img src={frank} alt="franks-headshot" />
            <p style={{marginBottom:"13rem"}}>Frank Mota</p>
          </div>{' '}
          <img src={logo2} alt="speedy painting logo" />
          <div className="about-image1">
            <img src={bernardo} alt="franks-headshot" />
            <p>Bernardo Gonzalez</p>
          </div>{' '}
        </div>
      </section>
      <section className="contact">
        <div className="form-wrapper flex">
          <h2>
            Get In
            <br />
            <span>Touch!</span>
          </h2>
          <form>
            <label for="email">Your Email</label>
            <input type="email" id="email" required />

            <label for="name">Your Name</label>
            <input type="text" id="name" required />

            <label for="message">What is your Message?</label>
            <textarea rows="4" cols="50" type="text" id="message" required />

            <button type="submit">Submit</button>
          </form>
        </div>
            <img src={contactImage} alt="speedy-member" />
      </section>
    </Fragment>
  );
}
export default About;
