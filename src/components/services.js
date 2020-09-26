import React from 'react';
import painter from '../icons/painter.png';
import logoVertical from '../icons/logoVertical.png';
import '../style.css';

function Services() {
  return (
    <div className="App">
        
        <main>
        
          <section className="hero">
            <div className=" hero-introduction2 flex">
              <img src={logoVertical} alt="company-logo" className="nav-logo" />
              {/* <h2>Speedy Gonzalez <br/>Drywall & Taping Inc.</h2> */}
              <p>
                lorem20 zdfgbadfbvadfvba ADFBdfbvdfVdfgbvdAFBADF
                adfgdfGBADFBVdfbvdSFBVdfbdfBdfbdfB dfbvdFBdfbdfBdfb{' '}
              </p>
              <a href="#gallery">Gallery</a>
            </div>
            <div className="hero-images2">
              <img src={painter} className="hero-painter" alt="painter" />
            </div>
          </section>
        </main>

        <h1></h1>
    </div>
  );
}

export default Services;
