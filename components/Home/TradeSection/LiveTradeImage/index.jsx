import React from "react";
import "./LiveTradeImage.css";
import Slide from 'react-reveal/Slide';
import Zoom from "react-reveal/Zoom";

function LiveTradeImage(props) {
    const {macbookAir, newMarketplaceLand, inView} = props;
    return (
        <Zoom duration={2000} top spy={inView}>
            <div className="group-1000001266">
                <div className="overlap-group4-2">
                    <div className="device-macbook-air">
                        <div className="overlap-group3">
                            <div className="overlap-group-6">
                                <div className="overlap-group1">
                                    <div className="screen-wrap"></div>
                                </div>
                                <div className="macbook-air">{macbookAir}</div>
                            </div>
                            <div className="bottom">
                                <div className="overlap-group2">
                                    <img className="groove" src="/img/groove.svg" alt="Groove"/>
                                </div>
                                <img className="bottom-curve" src="/img/bottom-curve.svg" alt="Bottom Curve"/>
                            </div>
                        </div>
                        <div className="shadow"></div>
                    </div>
                    <p className="new-marketplace-land">{newMarketplaceLand}</p>
                </div>
            </div>
        </Zoom>
    );
}

export default LiveTradeImage;
