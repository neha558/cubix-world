import React from "react";
import {InView} from "react-intersection-observer";
import Slide from "react-reveal/Slide";
import ScreenShot from "./ScreenShot";

function AppSection(props) {
    const {
        downloadOurFantasyLeagueApp,
        unleashTheChampionInYou,
        sports_Esports2,
        cubixFantasyLeagueIsARevolutionaryF,
        sports_Esports1,
        group1000001302Props,
        sports_Cricket1,
        multipleGameModes,
        sports_Cricket2,
        multipleSports,
        group1000001202Props,
        overlapGroup10,
        earnAndPlayWithCubix,
        token,
        nftBased,
        group1000001297,
    } = props;

    const [inView, setInView] = React.useState(false);
    const [inViewScreenshot, setInViewScreenshot] = React.useState(false);
    const [inViewHeader, setInViewHeader] = React.useState(false);
    const [inViewHeaderImage, setInViewHeaderImage] = React.useState(false);
    const [inViewAppLink, setInViewAppLink] = React.useState(false);
    const [inViewDescription, setInViewDescription] = React.useState(false);
    return (
        <>
            <InView onChange={setInViewScreenshot}>
                <Slide bottom duration={2000} spy={inViewScreenshot}>
                    <ScreenShot
                        vector6={group1000001302Props.vector6}
                        group1000001301={group1000001302Props.group1000001301}
                    />
                </Slide>
            </InView>
            <InView onChange={setInViewHeader}>
                <Slide up duration={2000} spy={inViewHeader}>
                    <p className="download-our-fantasy-league-app">{downloadOurFantasyLeagueApp}</p>
                </Slide>
            </InView>
            <InView onChange={setInViewHeaderImage}>
                <Slide duration={2000} right spy={inViewHeaderImage}>
                    <img className="unleash-the-champion-in-you" src={unleashTheChampionInYou} alt="Unleash the Champion in You" />
                </Slide>
            </InView>

            <InView onChange={setInViewDescription}>
                <Slide duration={2000} spy={inViewDescription} right>
                    <img
                        className="cubix-fantasy-league"
                        src={cubixFantasyLeagueIsARevolutionaryF}
                        alt="Cubix Fantasy League is a revolutionary fantasy sports platform that uses Non-fungible Tokens (NFTs) for ownership, player-versus-player (PVP) capabilities, and more. Join us to experience the future of fantasy sports"
                    />
                </Slide>
            </InView>
            <InView onChange={setInViewDescription}>
                <Slide duration={2000} spy={inViewDescription} right>
                    <div className="group-container-1">
                        <div className="group-1000001303">
                            <div className="sports_esports-container">
                                <img className="sports_esports" src={sports_Esports1} alt="sports_esports" />
                                <img className="sports_esports-1" src={sports_Esports2} alt="sports_esports" />
                            </div>
                            <div className="multiple-game-modes rajdhani-normal-white-16px">{multipleGameModes}</div>
                        </div>
                        <div className="group-1000001304">
                            <div className="sports_cricket-container">
                                <img className="sports_cricket" src={sports_Cricket1} alt="sports_cricket" />
                                <img className="sports_cricket-1" src={sports_Cricket2} alt="sports_cricket" />
                            </div>
                            <div className="multiple-sports rajdhani-normal-white-16px">{multipleSports}</div>
                        </div>
                    </div>
                    <div className="group-container-2">
                        <div className="group-1000001305">
                            <div className="group-1000001202">
                                <div className="overlap-group-7" style={{ backgroundImage: `url(${group1000001202Props.overlapGroup})` }}>
                                    <div className="nft">Nft</div>
                                </div>
                            </div>
                            <div className="nft-based rajdhani-normal-white-16px">{nftBased}</div>
                        </div>
                        <div className="group-1000001306">
                            <div className="overlap-group10" style={{ backgroundImage: `url(${overlapGroup10})` }}>
                                <img className="token" src={token} alt="token" />
                            </div>
                            <p className="earn-and-play-with-cubix rajdhani-normal-white-16px">{earnAndPlayWithCubix}</p>
                        </div>
                    </div>
                </Slide>
            </InView>
            <InView onChange={setInViewAppLink}>
                <Slide duration={2000} spy={inViewAppLink} bottom>
                    <img className="group-1000001297" src={group1000001297} alt="Group 1000001297" />
                </Slide>
            </InView>
        </>
    );
}

export default AppSection;