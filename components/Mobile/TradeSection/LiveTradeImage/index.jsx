import React from "react";
import "./LiveTradeImage.css";
import Slide from 'react-reveal/Slide';

function LiveTradeImage(props) {
    const {macbookAir, groove, bottomCurve, newMarketplaceLand, inView} = props;
    return (
        <div className="group-1000001266">
            <div className="overlap-group4">
                <div className="device-macbook-air">
                    <div className="overlap-group3">
                        <div className="overlap-group-6">
                            <div className="overlap-group1-3">
                                <div className="screen-wrap"></div>
                            </div>
                            <div className="macbook-air">{macbookAir}</div>
                        </div>
                        <div className="bottom">
                            <div className="overlap-group2">
                                <img className="groove" src={groove} alt="Groove" />
                            </div>
                            <img className="bottom-curve" src={bottomCurve} alt="Bottom Curve" />
                        </div>
                    </div>
                    <div className="shadow"></div>
                </div>
                <p className="new-marketplace-land">{newMarketplaceLand}</p>
            </div>
        </div>
    );
}

export default LiveTradeImage;
