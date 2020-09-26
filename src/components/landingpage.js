import React from 'react';
import logoHorizontal from '../icons/logoHorizontal.png';
import painter from '../icons/painter.png';
import logoVertical from '../icons/logoVertical.png';
import logo from '../icons/logo.png';
import drywall from '../icons/drywall2.png';
import paintSupplies from '../icons/paintSupplies.png';
import framing from '../icons/framing.png';
import '../style.css';

function LandingPage() {
  return (
    <div>
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
          <section className="hero2">
            <div className=" hero-introduction2 flex">
              <h2>Customer Reviews</h2>
              <p className="blockquote">
                "These guys were fantastic...They don't cut corners and do high
                quality work. They also kept everything clean as much as
                possible and cleaned up after. The work looks great and we are
                some happy customers. "<p>-Natasha P. 07/06/2020</p>
              </p>
              <p className="blockquote">
                "... As good as it gets! Didn't play games or try to charge
                extra. The quality was good and they worked fast. Bid was one of
                the lower ones, quality was one of the best! Will be using
                again."
                <p>-Laura B. 08/26/2020</p>
              </p>
              <p className="blockquote">
                "Bernardo and his team are a class act. No slacking here. His
                men worked extremely hard non-stop from the time they got to my
                house until they left. The quality to detail is the icing on the
                cake. Bernardo is a perfectionist...""
                <p>-Ross U. 03/29/2017</p>
              </p>
              <a href="#gallery">Reviews</a>
            </div>
            <div className="hero-images2">
              <img src={painter} className="hero-painter" alt="painter" />
            </div>
          </section>
          <section className="hero3">
            <h2>Services</h2>
            <p>
              At Speedy Gonzalez, we take pride in the craftmenship of our
              employees. Each individual in our team is carefully screened and
              trained in order to gaurantee our clients a higher standard of
              quality. Our employees are true specialist in their field and are
              required to have a minimum of four years experience in their
              craft.
            </p>
            <div className=" hero-introduction3 flex">
              <div className="landing-carpentry">
                <img src={framing} alt="stack-of-drywall" />
                <h1>Carpentry & Framing</h1>
              </div>
              <div className="landing-drywall">
                <img src={drywall} alt="stack-of-drywall" />
                <h1>Drywall & Taping</h1>
              </div>
              <div className="landing-painting">
                <img src={paintSupplies} alt="stack-of-drywall" />

                <h1>Painting & Finishing</h1>
              </div>
            </div>
            <a href="/services">Services</a>
          </section>
        </main>

        <h1></h1>
      </body>
    </div>
  );
}

export default LandingPage;
