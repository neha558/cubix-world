import React from "react";
import "./Frame10000012613.css";

function Frame10000012613(props) {
  const { spanText1, q12022WhitepaperA, className } = props;

  return (
    <div className={`frame-1000001261 ${className || ""}`}>
      <div className="q1-2022-whitepaper-a-4 rajdhani-medium-white-17-6px">
        <span className="span-1 rajdhani-medium-scooter-17-6px">{spanText1}</span>
        <span className="span-1 rajdhani-medium-white-17-6px-2"> 2022</span>
      </div>
      <p className="q1-2022-whitepaper-a-2 rajdhani-normal-white-15-1px">{q12022WhitepaperA}</p>
    </div>
  );
}

export default Frame10000012613;
