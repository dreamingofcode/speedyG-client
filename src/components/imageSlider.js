import React, { useState } from 'react';
import nextArrow from '../icons/nextArrow.png';
import drywall from '../icons/drywall2.png';
import drywall1 from '../icons/drywall1.png';
import drywall3 from '../icons/drywall3.png';
import tapingKnife from '../icons/tapingKnife.png';

import paintSupplies from '../icons/paintSupplies.png';
import framing from '../icons/framing.png';
// import framing1 from '../icons/framing1.png';
import framing2 from '../icons/framing2.png';
import varnish from '../icons/varnish.png';
import molding from '../icons/molding.png';
import door from '../icons/door.png';

function ImageSlider(props) {
  let [frameCount, setFrameCount] = useState(0);
  let [drywallCount, setDrywallCount] = useState(0);
  let [paintCount, setPaintCount] = useState(0);
  const { section } = props;
  const sectionImages = {
    drywall: [drywall,"hi", drywall1, "it",drywall3,"works", tapingKnife],
    frame: [framing,"What We Offer", framing2,"New additions: Walls, Partitions, Windows, Doors", varnish,"we", molding,"made", door],
    paint: [paintSupplies],
  };
  console.log(sectionImages.section);

  const setSlider = (e) => {
    let slider = e.target.name;
    let type = slider.split('-')[0];
    let section = slider.split('-')[1];
    if (type === 'next') {
      if (section === 'frame' && frameCount != sectionImages.frame.length - 2) {
        setFrameCount((frameCount += 2));
      }
      if (
        section === 'drywall' &&
        drywallCount != sectionImages.drywall.length - 2
      ) {
        setDrywallCount((drywallCount += 2));
      }
      if (section === 'paint' && paintCount != sectionImages.paint.length - 2) {
        setPaintCount((paintCount += 2));
      }
    } else if (type === 'prev') {
      if (section === 'frame' && frameCount != 0) {
        setFrameCount((frameCount -= 2));
      }
      if (section === 'drywall' && drywallCount != 0) {
        setDrywallCount((drywallCount -= 2));
      }
      if (section === 'paint' && paintCount != 0) {
        setPaintCount((paintCount -= 2));
      }
    }
    console.log(
      'drywall',
      drywallCount,
      'frame',
      frameCount,
      'paint',
      paintCount,
      sectionImages.frame.length
    );
  };

  return (
    <div className="service-images">
      {section === 'Framing & Carpentry' ? (
        <div>
          {frameCount !== 0 ? (
            <img
              src={nextArrow}
              alt="previous-arrow"
              name="prev-frame"
              onClick={(e) => setSlider(e)}
              className="previous-arrow"
            />
          ) : null}
          <h4>
            {' '}
            {sectionImages.frame[frameCount+1]}
            <img
              src={sectionImages.frame[frameCount]}
              alt="frame-diagram"
              className="slider-image"
              />{' '}
          </h4>
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
        <div>
          <img
            src={nextArrow}
            alt="previous-arrow"
            name="prev-drywall"
            onClick={(e) => setSlider(e)}
            className="previous-arrow"
          />
          <h4>
            {' '}
            {section}
            <img
              src={sectionImages.drywall[drywallCount]}
              className="slider-image"
              alt="stack-of-drywall"
            />{' '}
          </h4>
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
        <div>
          <img
            src={nextArrow}
            alt="previous-arrow"
            name="prev-paint"
            onClick={(e) => setSlider(e)}
            className="previous-arrow"
          />
          <h3>
            {' '}
            {section}
            <img src={sectionImages.paint[paintCount]}  className="slider-image" alt="stack-of-drywall" />
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
