import React from "react";
import Slider from "./Slider";
import Bounce from "react-reveal/Bounce";
import {InView} from "react-intersection-observer";

function RoadmapSection(props) {
    const [inView, setInView] = React.useState(false);

    return (
        <>
            <InView onChange={setInView}>
                <Bounce right spy={inView}>
                    <h1 className="title-2">Roadmap</h1>
                </Bounce>
            </InView>
            <div className="group-1000001291">
                <div className="roadmap-carousel-div">
                    <Slider/>
                </div>
                <div className="group-1000001289">
                    <div className="overlap-group-4">
                        <div className="rectangle-1724"></div>
                        <div className="rectangle-1725"></div>
                        <div className="rectangle-1726"></div>
                        <div className="rectangle-1727"></div>
                    </div>
                    <div className="rectangle-1720"></div>
                    <div className="rectangle-1721"></div>
                    <div className="rectangle-1722"></div>
                    <div className="rectangle-1728"></div>
                </div>
            </div>
        </>
    );
}

export default RoadmapSection;
