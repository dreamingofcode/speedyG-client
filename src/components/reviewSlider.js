import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reviewData from './reviewData';
import ReviewCard from './reviewCard';
class ReviewSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewProperties: reviewData.properties,
      property: reviewData.properties[0],
    };
  }
  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    const zodiac = reviewData.properties[newIndex];
    this.setState({
      property: reviewData.properties[newIndex],
    });
  };
  prevProperty = () => {
    console.log('this', this.state.property);
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: reviewData.properties[newIndex],
    });
  };
  render() {
    return (
      <div className="slider-container ">
        <div className="review-slider-buttons">
          <button
            onClick={() => this.nextProperty()}
            disabled={this.state.property.index === 11}
          >
            NEXT
          </button>
          <button
            label="Prev"
            // primary={true}
            onClick={() => this.prevProperty()}
            disabled={this.state.property.index === 0}
          >
            PREV
          </button>
        </div>
        <div className="">
          <div
            className={`cards-slider active-slide-${this.state.property.index}`}
          >
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${
                  this.state.property.index *
                  // (131 / this.state.reviewProperties.length)
                  (100 / this.state.reviewProperties.length)
                }%)`,
              }}
            >
              {this.state.reviewProperties.map((property) => (
                <ReviewCard key={property.sign} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ReviewSlider;
