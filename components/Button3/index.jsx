import React from "react";
import "./Button3.css";

function Button3(props) {
  const { upcoming } = props;

  return (
    <div className="button-2">
      <div className="overlap-group-8">
        <a href="http://example.com" target="_blank">
          <div className="upcoming-1 valign-text-middle rajdhani-semi-bold-white-18-3px">{upcoming}</div>
        </a>
      </div>
    </div>
  );
}

export default Button3;
