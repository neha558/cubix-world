import React from "react";
import "./PlayNowButton.css";

function PlayNowButton(props) {
  const { playNow,href } = props;

  return (
    <div className="button">
      <div className="overlap-group-7">
        <a href={href} target="_blank">
          <div className="play-now valign-text-middle">{playNow}</div>
        </a>
      </div>
    </div>
  );
}

export default PlayNowButton;
