import React, { PureComponent } from "react";

class TopBar extends PureComponent {
  render() {
    return (
      <div className="d-flex fjbetween p--8 facenter">
        <img src="../images/logo.png" width="25%" alt="Logo"></img>
        <div className="facenter">Need help? Call Us +91 99xxxxxxxx</div>
      </div>
    );
  }
}

export default TopBar;
