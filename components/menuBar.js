import { Popover } from "@innovaccer/design-system";
import React, { Component } from "react";

class MenuBar extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "var(--jal-dark)", color: "var(--white)" }}
        className="d-flex fjbetween"
      >
        <div className="d-flex">
          <p className="mL--16">Home</p>
          <p className="mL--16">About Us</p>
          <Popover
            on="hover"
            trigger={<p className="mL--16">Product</p>}
            position="bottom-start"
            style={{
              backgroundColor: "var(--jal-dark)",
              color: "var(--white)",
            }}
          >
            <div>
              <p>Insecticides</p>
              <p>Herbicides</p>
              <p>Fungicides</p>
              <p>Plant Growth Regulator</p>
            </div>
          </Popover>
          <p className="mL--16">Contact Us</p>
        </div>
        <div className="p--16">User Login</div>
      </div>
    );
  }
}

export default MenuBar;
