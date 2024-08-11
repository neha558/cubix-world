import React from "react";
import {InView} from "react-intersection-observer";
import LiveTradeImage from "./LiveTradeImage";
import Flash from "react-reveal/Flash";
import TradeContent from "./TradeContent";
import Button from "./Button";

function TradeSection(props) {
    const {liveTradeImageProps, group1000001223, group1000001222, exploreNow, live} = props;
    const [inView, setInView] = React.useState(false);
    const [inViewButton, setInViewButton] = React.useState(false);
    const [inViewTradeImage, setInViewTradeImage] = React.useState(false);
    const [inViewLiveImage, setInViewLiveImage] = React.useState(false);
    return (
        <div className="overlap-group6">
            {/*<InView onChange={setInViewTradeImage}>*/}
                <LiveTradeImage
                    macbookAir={liveTradeImageProps.macbookAir}
                    newMarketplaceLand={liveTradeImageProps.newMarketplaceLand}
                    inView={inViewTradeImage}
                />
            {/*</InView>*/}
            <div className="frame-1000001266">
                <InView onChange={setInViewLiveImage}>
                    <Flash duration={2000} spy={inViewLiveImage}>
                        <div className="group-1000001226">
                            <div className="group-container">
                                <img className="group-1000001223" src={group1000001223}
                                     alt="Group 1000001223"/>
                                <img className="group-1000001222" src={group1000001222}
                                     alt="Group 1000001222"/>
                                <div className="group-1000001224">
                                    <div className="ellipse-1"></div>
                                    <div className="live">{live}</div>
                                </div>
                            </div>
                        </div>
                    </Flash>
                </InView>
                <InView onChange={setInView}>
                    <TradeContent inView={inView}/>
                </InView>
            </div>
            <InView onChange={setInViewButton}>
                <Button duration={2000} exploreNow={exploreNow} inView={inViewButton}/>
            </InView>
        </div>
    );
}

export default TradeSection;