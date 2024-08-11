import React from "react";
import "./Frame1000001278.css";

function Frame1000001278(props) {
  const { spanText1, q12022WhitepaperA, className } = props;

  return (
    <div className={`frame-1000001278 ${className || ""}`}>
      <div className="q1-2022-whitepaper-a-3 rajdhani-medium-white-17-6px">
        <span className="span-2 rajdhani-medium-scooter-17-6px">{spanText1}</span>
        <span className="span-2 rajdhani-medium-white-17-6px-2"> 2023</span>
      </div>
      <p className="q1-2022-whitepaper-a-5 rajdhani-normal-white-13-8px">{q12022WhitepaperA}</p>
    </div>
  );
}

export default Frame1000001278;
