import React from "react";
import "./EmailAddress.css";

function EmailAddress(props) {
  const { emailAddress, polygon2, arrow1 } = props;

  return (
    <div className="email-address">
      <div className="frame-4">
        <div className="email-address-1">{emailAddress}</div>
        <div className="arrow-left">
          <div className="group-1000001250">
            <div className="overlap-group-9">
              <img className="polygon-2" src={polygon2} alt="Polygon 2" />
              <img className="arrow-1" src={arrow1} alt="Arrow 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailAddress;
