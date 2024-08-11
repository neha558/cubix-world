import React from "react";
import "./Footer.css";

function Footer(props) {
  const { stayConnected, facebookIcon, iconLinkedin, mediumIcon, youtubeIcon } = props;

  return (
    <footer className="footer">
      <div className="stay-connected">{stayConnected}</div>
      <div className="frame-1000001240">
        <img className="facebook-icon" src={facebookIcon} alt="Facebook Icon" />
        <img className="icon-linkedin" src={iconLinkedin} alt="icon-linkedin" />
        <img className="medium-icon" src={mediumIcon} alt="Medium Icon" />
        <img className="youtube-icon" src={youtubeIcon} alt="Youtube Icon" />
      </div>
    </footer>
  );
}

export default Footer;
