import { Icon } from "@innovaccer/design-system";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

class Slider extends Component {
  render() {
    return (
      <div className="bTop bBottom">
        <Carousel
          autoPlay
          showThumbs={false}
          stopOnHover={false}
          infiniteLoop
          showStatus={false}
          interval={5000}
          transitionTime={1000}
        >
          <div>
            <img src="../images/slide1.jpg" />
          </div>
          <div>
            <img src="../images/slide2.jpg" />
          </div>
          <div>
            <img src="../images/slide3.jpg" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
