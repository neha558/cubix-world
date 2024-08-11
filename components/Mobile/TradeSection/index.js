import React from "react";
import {InView} from "react-intersection-observer";
import Flash from "react-reveal/Flash";
import Button from "./Button";
import Zoom from "react-reveal/Zoom";
import LiveTradeImage from "./LiveTradeImage";

function TradeSection(props) {
    const {
        group1000001266Props,
        group1000001223,
        group1000001222,
        exploreNow,
        live,
        overlapGroup6,
        tradeCubixNftsWithEaseBuySellOrRent
    } = props;
    const [inView, setInView] = React.useState(false);
    const [inViewButton, setInViewButton] = React.useState(false);
    const [inViewTradeImage, setInViewTradeImage] = React.useState(false);
    const [inViewLiveImage, setInViewLiveImage] = React.useState(false);
    return (
        <>
            <InView onChange={setInViewTradeImage}>
                <Zoom bottom duration={2000} spy={inViewTradeImage}>
                    <LiveTradeImage
                        macbookAir={group1000001266Props.macbookAir}
                        groove={group1000001266Props.groove}
                        bottomCurve={group1000001266Props.bottomCurve}
                        newMarketplaceLand={group1000001266Props.newMarketplaceLand}
                    />
                </Zoom>
            </InView>
            <InView onChange={setInViewLiveImage}>
                <Flash duration={2000} spy={inViewLiveImage}>
                    <div className="group-container">
                        <img className="group-1000001223" src={group1000001223} alt="Group 1000001223"/>
                        <img className="group-1000001222" src={group1000001222} alt="Group 1000001222"/>
                        <div className="group-1000001224">
                            <div className="ellipse-1"></div>
                            <div className="live">{live}</div>
                        </div>
                    </div>
                </Flash>
            </InView>
            <InView onChange={setInView}>
                <Zoom right duration={2000} cascade spy={inView}>
                    <img
                        className="trade-cubix-nf-ts-wi"
                        src={tradeCubixNftsWithEaseBuySellOrRent}
                        alt="Trade CUBIX NFTs with Ease: Buy, Sell, or Rent on the CUBIX Marketplace"
                    />
                </Zoom>
            </InView>
            <InView onChange={setInViewButton}>
                <Button overlapGroup6={overlapGroup6} exploreNow={exploreNow} inView={inViewButton}/>
            </InView>
        </>
    );
}

export default TradeSection;