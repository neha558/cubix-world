import React from "react";
import {InView} from "react-intersection-observer";
import Zoom from "react-reveal/Zoom";
import P2PCardImage from "./P2PCardImage";
import PlayNowButton from "./PlayNowButton";
import TutorialButton from "./TutorialButton";
import Fade from "react-reveal/Fade";

function P2PGameSection(props) {
    const {p2PCardImageProps, joinCubixFantasyL, buttonProps, button2Props, playGameP2PUrl} = props;
    const [inView, setInView] = React.useState(false);
    return (
        <>
            <div className="overlap-group4">
                <InView onChange={setInView}>
                    <P2PCardImage {...p2PCardImageProps } inView={inView}/>
                </InView>
                <div className="flex-col-1">
                    <InView onChange={setInView}>
                        <Zoom right cascade when={inView}>
                            <div className="frame-1000001264">
                                <img className="p2-p-nft-card-battle" src="/img/p2p-nft-card-battle.svg"
                                     alt="P2P NFT card battle"/>
                                <p className="join-cubix-fantasy-l rajdhani-normal-white-18-3px">{joinCubixFantasyL}</p>
                            </div>
                        </Zoom>
                    </InView>
                    <div className="button-container">
                        <InView onChange={setInView}>
                            <Fade left when={inView}>
                                <PlayNowButton playNow={buttonProps.playNow} href={playGameP2PUrl}/>
                            </Fade>
                        </InView>
                        <InView onChange={setInView}>
                            <Fade right when={inView}>
                                <TutorialButton tutorial={button2Props.tutorial}/>
                            </Fade>
                        </InView>
                    </div>
                </div>
            </div>

        </>
    );
}

export default P2PGameSection;