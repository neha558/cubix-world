import React from "react";
import {InView} from "react-intersection-observer";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function AppSection(props) {
    const {
        earnAndPlayWithCubix,
        iconShield,
        downloadOurFantasyLeagueApp,
        sports_Esports,
        multipleGameModes,
        sports_Cricket,
        multipleSports,
        nft,
        nftBased
    } = props;

    const [inView, setInView] = React.useState(false);
    const [inViewSmallHeader, setInViewSmallHeader] = React.useState(false);
    const [inViewHeaderText, setInViewHeaderText] = React.useState(false);
    const [inViewAppLink, setInViewAppLink] = React.useState(false);
    const [inViewDescription, setInViewDescription] = React.useState(false);
    return (
        <>
            <div className="flex-col">
                <InView onChange={setInViewSmallHeader}>
                    <Slide up duration={2000} spy={inViewSmallHeader}>
                        <p className="download-our-fantasy-league-app">{downloadOurFantasyLeagueApp}</p>
                    </Slide>
                </InView>
                <div className="frame-1000001263">
                    <InView onChange={setInViewHeaderText}>
                        <Slide duration={2000} right spy={inViewHeaderText}>
                            <img
                                className="unleash-the-champion-in-you"
                                src="/img/unleash-the-champion-in-you.svg"
                                alt="Unleash the Champion in You"
                            />
                        </Slide>
                    </InView>
                    <InView onChange={setInViewDescription}>
                        <Slide duration={2000} spy={inViewDescription} right>
                            <img
                                className="cubix-fantasy-league"
                                src="/img/cubix-fantasy-league-is-a-revolutionary-fantasy-sports-platform-.svg"
                                alt="Cubix Fantasy League is a revolutionary fantasy sports platform that uses Non-fungible Tokens (NFTs) for ownership, player-versus-player (PVP) capabilities, and more. Join us to experience the future of fantasy sports"
                            />
                        </Slide>
                    </InView>
                </div>
                <InView onChange={setInViewDescription}>
                    <Slide duration={2000} spy={inViewDescription} right>
                        <div className="frame-container">
                            <div className="frame-1000001257">
                                <img className="sports_esports" src={sports_Esports} alt="sports_esports"/>
                                <div
                                    className="multiple-game-modes rajdhani-normal-white-18-2px">{multipleGameModes}</div>
                            </div>
                            <div className="frame-100000125">
                                <img className="sports_cricket" src={sports_Cricket} alt="sports_cricket"/>
                                <div
                                    className="multiple-sports rajdhani-normal-white-18-2px">{multipleSports}</div>
                            </div>
                        </div>
                    </Slide>
                </InView>
                <div className="frame-container-1">
                    <InView onChange={setInViewDescription}>
                        <Slide duration={2000} spy={inViewDescription} right>
                            <div className="frame-100000125">
                                <div className="group-1000001202">
                                    <div className="overlap-group">
                                        <div className="nft">{nft}</div>
                                    </div>
                                </div>
                                <div className="nft-based rajdhani-normal-white-18-2px">{nftBased}</div>
                            </div>
                        </Slide>
                    </InView>
                    <InView onChange={setInViewDescription}>
                        <Slide duration={2000} spy={inViewDescription} right>
                            <div className="frame-1000001260">
                                <img className="icon-shield" src={iconShield} alt="icon-shield"/>
                                <p className="earn-and-play-with-cubix rajdhani-normal-white-18-2px">{earnAndPlayWithCubix}</p>
                            </div>
                        </Slide>
                    </InView>
                </div>
                <div className="_store_badge-container">
                    <InView onChange={setInViewAppLink}>
                        <Slide duration={2000} spy={inViewAppLink} left>
                            <img className="_-store" src="/img/google-play-store-badge-en-1.svg"
                                 alt="Google_Play_Store_badge_EN 1"/>
                        </Slide>
                        <Slide duration={2000} spy={inViewAppLink} right>
                            <img
                                className="_-store"
                                src="/img/download-on-the-app-store-badge-1.svg"
                                alt="Download_on_the_App_Store_Badge 1"
                            />
                        </Slide>
                    </InView>
                </div>
            </div>
            <InView onChange={setInView}>
                <Slide duration={2000} spy={inView} bottom>
                    <img className="group-1000001269" src="/img/group-1000001269.svg" alt="Group 1000001269"/>
                </Slide>
            </InView>
        </>
    );
}

export default AppSection;