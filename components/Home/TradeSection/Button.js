import React from "react";
import Slide from 'react-reveal/Slide';
function Button(props) {
    const {exploreNow, inView} = props;

    return (
        <Slide right spy={inView}>
            <div className="overlap-group5">
                <a href="https://example.com/" target="_blank">
                    <div
                        className="hover-animate-link-with-color explore-now valign-text-middle rajdhani-semi-bold-white-18-3px">{exploreNow}</div>
                </a>
            </div>
        </Slide>
    )
}

export default Button;