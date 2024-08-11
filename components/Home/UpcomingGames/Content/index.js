import React from "react";
import Zoom from "react-reveal/Zoom";
import Tada from "react-reveal/Tada";
import Button from "../Button";
import {InView} from "react-intersection-observer";
function Content(props) {
    const {
        predictionMaskGroup,
        predictionGame,
        maximizeYourChance,
        maskGroup1,
        metaverse,
        createAVirtualSpo,
        maskGroup2,
        simulation,
        joinTheExcitement,
    } = props;
    const [inView, setInView] = React.useState(false);
    return (
        <>
            <InView onChange={setInView}>
                <div className="flex-row-1">
                    <div className="prediction-game">
                        <Zoom buttom duration={3000} spy={inView}>
                            <img className="mask-group" src={predictionMaskGroup} alt="Prediction Mask group"/>
                        </Zoom>

                        <Tada spy={inView}>
                            <div className="frame-1000001267">
                                <div
                                    className="prediction-game-1 rajdhani-semi-bold-white-45px">{predictionGame}</div>
                                <p className="maximize-your-chance rajdhani-normal-white-18-3px">{maximizeYourChance}</p>
                            </div>
                        </Tada>

                        <Button text="Upcoming" url="" inView={inView}/>
                    </div>
                    <div className="metaverse">
                        <Zoom buttom duration={3000} spy={inView}>
                            <img className="mask-group-1" src={maskGroup1} alt="Mask group"/>
                        </Zoom>

                        <Tada spy={inView}>
                            <div className="frame-1000001268">
                                <div className="metaverse-1 rajdhani-semi-bold-white-45px">{metaverse}</div>
                                <p className="create-a-virtual-spo rajdhani-normal-white-18-3px">{createAVirtualSpo}</p>
                            </div>
                        </Tada>

                        <Button text="Upcoming" url="" inView={inView}/>
                    </div>
                    <div className="simulation">
                        <Zoom buttom duration={3000} spy={inView}>
                            <img className="mask-group" src={maskGroup2} alt="Mask group"/>
                        </Zoom>

                        <Tada spy={inView}>
                            <div className="frame-1000001269">
                                <div className="simulation-1 rajdhani-semi-bold-white-45px">{simulation}</div>
                                <p className="join-the-excitement rajdhani-normal-white-18-3px">{joinTheExcitement}</p>
                            </div>
                        </Tada>

                        <Button text="Upcoming" url="" inView={inView}/>
                    </div>
                </div>
            </InView>
        </>
    );
}

export default Content;