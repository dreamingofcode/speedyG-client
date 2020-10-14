import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function ReviewSlider() {
  return (
    <div>
      <MuiThemeProvider>
        <h1>SLIDER</h1>
        <div className="slider1 ">
          <RaisedButton
            label=" Next"
            primary={true}
            style={styles.button}
            onClick={() => nextProperty()}
            disabled={property.index === 11}
          />
          <RaisedButton
            label="Prev"
            primary={true}
            style={styles.button}
            onClick={() => prevProperty()}
            disabled={property.index === 0}
          />

          <div className="row my-roww">
            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div
                  className="cards-slider-wrapper"
                  style={{
                    transform: `translateX(-${
                      property.index * (100 / zodiacProperties.length)
                    }%)`,
                  }}
                >
                  {zodiacProperties.map((property) => (
                    <ZodiacCard key={property.sign} property={property} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <b />
          <br />
          <h1>Please Select Partner's Horosocope!</h1>

          <RaisedButton
            label=" Next"
            primary={true}
            style={styles.button}
            onClick={() => nextProperty2()}
            disabled={property2.index === 11}
          />
          <RaisedButton
            label="Prev"
            primary={true}
            style={styles.button}
            onClick={() => prevProperty2()}
            disabled={property2.index === 0}
          />
          <div className="row my-roww">
            <div className="col">
              <div className={`cards-slider active-slide-${property2.index}`}>
                <div
                  className="cards-slider-wrapper"
                  style={{
                    transform: `translateX(-${
                      property2.index * (100 / zodiacProperties.length)
                    }%)`,
                  }}
                >
                  {zodiacProperties.map((property) => (
                    <ZodiacCard key={property.sign} property={property} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  );
}
export default ReviewSlider;
