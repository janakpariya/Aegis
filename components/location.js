import React from "react";

const Location = () => {
  return (
    <div className="facenter d-flex--column">
      <h1 className="mb--8">Location</h1>
      <iframe
        style={{ height: 400, width: 600 }}
        src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=22.776960, 72.327566&amp;aq=0&amp;sll=22.776960, 72.327566&amp;sspn=22.776960, 72.327566&amp;ie=UTF8&amp;hq=&amp;ll=22.776960, 72.327566&amp;spn=0.01628,0.025663&amp;z=14&amp;iwloc=A&amp;output=embed"
      />
    </div>
  );
};

export default Location;
