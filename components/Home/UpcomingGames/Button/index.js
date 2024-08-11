import React from "react";
import Fade from 'react-reveal/Fade';
function Button(props) {
    const {text, url, inView} = props;

    return (
        <Fade bottom spy={inView}>
        <div className="overlap-group-1">
            <a>
                <div className="upcoming valign-text-middle rajdhani-semi-bold-white-18-3px">{text}</div>
            </a>
        </div>
        </Fade>
    );
}

export default Button;