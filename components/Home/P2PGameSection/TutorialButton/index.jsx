import React from "react";
import "./TutorialButton.css";

function TutorialButton(props) {
  const { tutorial } = props;

  return (
    <div className="button-1">
      <div className="overlap-group1-1">
        <a href="https://www.youtube.com/watch?v=PXg3hj47hUg" target="_blank">
          <div className="hover-animate-link-with-color tutorial valign-text-middle rajdhani-semi-bold-white-18-3px">{tutorial}</div>
        </a>
      </div>
    </div>
  );
}

export default TutorialButton;
