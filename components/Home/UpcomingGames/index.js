import React from "react";
import {InView} from "react-intersection-observer";
import Bounce from 'react-reveal/Bounce';
import Content from "./Content";

function UpcomingGames(props) {
    const [inView, setInView] = React.useState(false);
    return (
        <>
            <InView onChange={setInView}>
                <Bounce right spy={inView}>
                    <img className="upcoming-games" src="/img/upcoming-games.svg" alt="Upcoming Games"/>
                </Bounce>
            </InView>
            <Content { ...props }/>
        </>
    );
}

export default UpcomingGames;