import React from "react";
import Slide from 'react-reveal/Slide';
function Button(props) {
    const {exploreNow, inView, overlapGroup6} = props;

    return (
        <Slide bottom duration={2000} spy={inView}>
            <div className="overlap-group6" style={{ backgroundImage: `url(${overlapGroup6})` }}>
                <a href="https://example.com/" target="_blank">
                    <div className="explore-now valign-text-middle rajdhani-semi-bold-white-15-7px">{exploreNow}</div>
                </a>
            </div>
        </Slide>
    )
}

export default Button;