import React, { useState } from 'react';
import nextArrow from '../icons/nextArrow.png';
import drywall from '../icons/drywall2.png';
import paintSupplies from '../icons/paintSupplies.png';
import framing from '../icons/framing.png';

function ImageSlider(props) {
  const [frameCount, setFrameCount] = useState(0);
  const [drywallCount, setDrywallCount] = useState(0);
  const [paintCount, setPaintCount] = useState(0);
  const { section } = props;
  const sectionImages = {
    drywall: [drywall],
    frame: [framing],
    paint: [paintSupplies],
  };
  console.log(sectionImages.section);

  const setSlider = (e) => {
    let type = e.target.name;
    if (type === 'next-frame') {
    } else if (type === 'prev-frame') {
    }
  };
  {
    /* <div className="service-images">
          {' '}
          <img
            src={nextArrow}
            alt="previous-arrow"
            name="prev-frame"
            className="previous-arrow"
          />{' '}
          <h3>
            Framing & Carpentry
            <img src={framing} alt="stack-of-drywall" />{' '}
          </h3>
          <img
            src={nextArrow}
            alt="next-arrow"
            name="next-frame"
            className="next-arrow"
          />
        </div> */
  }
  return (
    <div className="service-images">
      {section === 'Framing & Carpentry' ? (
        <div className="service-images">
          <img
            src={nextArrow}
            alt="previous-arrow"
            name="prev-frame"
            className="previous-arrow"
          />
          <h3>
            {' '}
            {section}
            <img src={sectionImages.frame[frameCount]} alt="frame-diagram" />{' '}
          </h3>
          <img
            src={nextArrow}
            alt="next-arrow"
            name="next-frame"
            onClick={(e) => setSlider(e)}
            className="next-arrow"
          />
        </div>
      ) : null}

      {section === 'Drywall & Taping' ? (
        <div className="service-images">
          <img
            src={nextArrow}
            alt="previous-arrow"
            name="prev-drywall"
            className="previous-arrow"
          />
          <h3>
            {' '}
            {section}
            <img src={sectionImages.drywall[drywallCount]} alt="stack-of-drywall" />{' '}
          </h3>
          <img
            src={nextArrow}
            alt="next-arrow"
            name="next-drywall"
            onClick={(e) => setSlider(e)}
            className="next-arrow"
          />
        </div>
      ) : null}
      {section === 'Painting & Finishing' ? (
      <div className="service-images">
          <img
            src={nextArrow}
            alt="previous-arrow"
            name="prev-paint"
            className="previous-arrow"
            />
          <h3>
            {' '}
            {section}
          <img src={sectionImages.paint[0]} alt="stack-of-drywall" />
          </h3>
          <img
            src={nextArrow}
            alt="next-arrow"
            name="next-paint"
            onClick={(e) => setSlider(e)}
            className="next-arrow"
          />
        </div>
      ) : null}
    </div>
  );
}
export default ImageSlider;
