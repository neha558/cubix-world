import React from "react";
import "./P2PCardImage.css";
import {InView} from "react-intersection-observer";
import Fade from "react-reveal/Fade";

function P2PCardImage(props) {
    const {websiteGroundCurrentView1, legendaryNftCard1, legendaryNftCard2, bolt, inView} = props;
    return (
        <>
            <div className="group-5460">
                <div className="overlap-group3-1">
                    <div className="overlap-group2-1">
                        <Fade bottom when={inView}>
                            <img
                                className="website-ground-current-view-1"
                                src={websiteGroundCurrentView1}
                                alt="website ground-Current View 1"
                            />
                        </Fade>
                        <Fade left when={inView}>
                            <img className="legendary-nft-card" src={legendaryNftCard1} alt="Legendary NFT Card"/>
                        </Fade>
                        <Fade right when={inView}>
                            <img className="legendary-nft-card-1" src={legendaryNftCard2} alt="Legendary NFT Card"/>
                        </Fade>
                    </div>
                    <Fade top when={inView}>
                        <img className="bolt" src={bolt} alt="bolt"/>
                    </Fade>
                </div>
            </div>
        </>
    );
}

export default P2PCardImage;
