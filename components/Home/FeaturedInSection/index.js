import React from "react";
import {InView} from "react-intersection-observer";
import Bounce from "react-reveal/Bounce";
import FeaturedInSHerald from "../../FeaturedInSHerald";
import FeaturedInTribune from "../../FeaturedInTribune";
import FeaturedInDigest from "../../FeaturedInDigest";

function FeaturedInSection(props) {
    const [inView, setInView] = React.useState(false);

    return (
        <>
            <FeaturedInDigest/>
            <div className="flex-col-2">
                <InView onChange={setInView}>
                    <Bounce right spy={inView}>
                        <img className="featured-in-1" src="/img/featured-in.svg" alt="Featured In"/>
                    </Bounce>
                </InView>
                <FeaturedInSHerald/>
            </div>
            <FeaturedInTribune/>
        </>
    );
}

export default FeaturedInSection;
