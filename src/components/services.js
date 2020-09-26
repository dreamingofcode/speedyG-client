import React from 'react';
import logoHorizontal from '../icons/logoHorizontal.png';
import painter from '../icons/painter.png';
import logoVertical from '../icons/logoVertical.png';
import logo from '../icons/logo.png';

import '../style.css';
function Services() {
  return (
    <div className="App">
      <body>
        
        <main>
          <section className="hero">
            <div className="hero-images"></div>
            <div className=" hero-introduction flex">
              <img src={logo} alt="company-logo" className="hero-logo" />
              {/* <h2>Speedy Gonzalez <br/>Drywall & Taping Inc.</h2> */}
              <p>
                With 7 years of operation, Speedy Gonzalez is a reputable
                commercial and residential construction company especializing in
                both drywall and painting treatments. Our team is committed to a
                high standard of quality and integrity through both our
                incomparable services and devotion. Take a look and see for
                yourself why Speedy Gonzalez is sought after time and time
                again.
              </p>
              <a href="#gallery">Gallery</a>
            </div>
          </section>
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
      </body>
    </div>
  );
}

export default Services;
