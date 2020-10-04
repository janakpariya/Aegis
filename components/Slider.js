import { Icon } from "@innovaccer/design-system";
import React from "react";

const Slider = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--jal-dark)",
        width: "100%",
        height: "500px",
      }}
      className="d-flex fjbetween bTop bBottom"
    >
      <div className="facenter" style={{ backgroundColor: "transparent" }}>
        <Icon name="keyboard_arrow_left" size={32} />
      </div>
      <div className="facenter">
        <Icon name="keyboard_arrow_right" size={32} />
      </div>
    </div>
  );
};

export default Slider;
