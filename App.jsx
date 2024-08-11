import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import { useMediaQuery } from 'react-responsive'
import HomeMobile from "./components/Mobile";


function App() {
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 992 })
        return isNotMobile ? children : null
    }

  return (
    <Router>
      <Switch>
        <Route path="/:path(|home)">
                <Tablet><Home {...homeData} /></Tablet>
                <Mobile><HomeMobile {...mobileData} /></Mobile>
                <Default><Home {...homeData} /></Default>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const liveTradeImageData = {
    macbookAir: "Macbook Air",
    newMarketplaceLand: <React.Fragment>New Marketplace Landing Page<br />to Come Here</React.Fragment>,
};

const p2PCardImageData = {
    websiteGroundCurrentView1: "/img/website-ground-current-view-1@2x.png",
    legendaryNftCard1: "/img/legendary-nft-card@2x.png",
    legendaryNftCard2: "/img/legendary-nft-card-1@2x.png",
    bolt: "/img/bolt@2x.png",
};

const buttonData = {
    playNow: "Play Now",
};

const button2Data = {
    tutorial: "Tutorial",
};

const button3Data = {
    upcoming: "Upcoming",
};

const homeData = {
    HomeLinkText: "Home",
    navbarLinkMarketplace: "Marketplace",
    navbarLinkGames: "Games",
    navbarLinkAirdrop: "Airdrop",
    navbarLinkSurname: "White Paper",
    group1000001223: "/img/group-1000001223@2x.png",
    group1000001222: "/img/group-1000001222@2x.png",
    live: "Live",
    exploreNow: "Explore Now",
    downloadOurFantasyLeagueApp: "Download Our Fantasy League App",
    sports_Esports: "/img/sports-esports@2x.png",
    multipleGameModes: "Multiple Game Modes",
    sports_Cricket: "/img/sports-cricket@2x.png",
    multipleSports: "Multiple Sports",
    nft: "Nft",
    nftBased: "Nft Based",
    iconShield: "/img/token@2x.png",
    earnAndPlayWithCubix: "Earn And Play With $cubix",
    joinCubixFantasyL: "Join Cubix Fantasy League. Experience Nft-based Fantasy Sports. Revolutionize Your Gaming Experience.",
    predictionMaskGroup: "/img/prediction-mask-group@2x.png",
    predictionGame: "Prediction Game",
    maximizeYourChance: "Maximize Your Chances Of Success By Correctly Predicting The Winner.",
    maskGroup1: "/img/mask-group@2x.png",
    metaverse: "Metaverse",
    createAVirtualSpo: "Create A Virtual Sports Team In The Cubix Metaverse, Compete With Nfts, Win Rewards.",
    upcoming1: "Upcoming",
    maskGroup2: "/img/mask-group-1@2x.png",
    simulation: "Simulation",
    joinTheExcitement: "Join The Excitement And Participate In Simulation Sports Using Nfts.",
    upcoming2: "Upcoming",
    group10000012521: "/img/group-1000001252-1@2x.png",
    logo111: "/img/logo--1--1-1@2x.png",
    group10000012541: "/img/group-1000001254@2x.png",
    group1000001263: "/img/group-1000001263@2x.png",
    group1000001264: "/img/group-1000001264@2x.png",
    group10000012522: "/img/group-1000001252@2x.png",
    group1000001251: "/img/group-1000001204@2x.png",
    group1000001245: "/img/group-1000001245@2x.png",
    group1000001248: "/img/group-1000001208@2x.png",
    logo112: "/img/logo--1--1@2x.png",
    group10000012542: "/img/group-1000001249@2x.png",
    coinrankingLogoWhite1: "/img/coinranking-logo-white-1@2x.png",
    spanText1: "Q1",
    spanText2: " 2022",
    spanText3: "Q2",
    spanText4: " 2022",
    spanText5: "Q3",
    spanText6: " 2022",
    spanText7: "Q4",
    spanText8: " 2022",
    vector11: "/img/vector-10-2@2x.png",
    vector12: "/img/vector-10-2@2x.png",
    joinOurRobustComm: "Join Our Robust Community Of Nft Collectors, Metaverse Cricketers, & Top P2e Earners. Participate In Our Discord Discussions!",
    makeConnectionWithMembers: <React.Fragment>Make Connection<br />with Members</React.Fragment>,
    joinOurRedditCommunity: <React.Fragment>Join Our Reddit<br />community</React.Fragment>,
    group1000001221: "/img/group-1000001221@2x.png",
    catchTheLatestNews: <React.Fragment>Catch The<br />latest News</React.Fragment>,
    group5436: "/img/group-5436@2x.png",
    title2: "Copyright  2022 CUBIX Pro",
    title3: "Terms",
    title4: "Privacy",
    title5: "Marketplace",
    title6: "Card Battle",
    title7: "Fantasy Sports",
    spanText17: "$Cubix ",
    spanText18: "Token",
    title8: "Light Paper",
    title9: "White Paper",
    title10: "Pitch Deck",
    affiliateMarketing: "Affiliate Marketing",
    title11: "About Us",
    title12: "Contact Us",
    inputType: "email",
    inputPlaceholder: "Email Address",
    stayConnected: "Stay Connected",
    fbIcon: "/img/fb-icon@2x.png",
    iconLinkedin: "/img/linkedin@2x.png",
    medium: "/img/medium@2x.png",
    youtube: "/img/youtube@2x.png",
    liveTradeImageProps: liveTradeImageData,
    p2PCardImageProps: p2PCardImageData,
    buttonProps: buttonData,
    button2Props: button2Data,
    button3Props: button3Data,
};

const group1000001266Data = {
    macbookAir: "Macbook Air",
    groove: "/img/groove@2x.png",
    bottomCurve: "/img/bottom-curve@2x.png",
    newMarketplaceLand: <React.Fragment>New Marketplace Landing Page<br />to Come Here</React.Fragment>,
};

const group1000001302Data = {
    vector6: "/img/vector-6@2x.png",
    group1000001301: "/img/group-1000001301@2x.png",
};

const group1000001202Data = {
    overlapGroup: "/img/polygon-1@2x.png",
};

const group1000001205Data = {
    group1000001205: "/img/vector-9@2x.png",
    download6: "/img/download-6@mobile.png",
};

const group1000001204Data = {
    group1000001204: "/img/vector-10@2x.png",
    download5: "/img/download-5@mobile.png",
};

const group1000001256Data = {
    vector10: "/img/vector-10-1@2x.png",
    download5: "/img/vector-10-2@2x.png",
};

const frame100000126131Data = {
    spanText1: "Q1",
    q12022WhitepaperA: <React.Fragment>White paper and<br />      website development<br />Seed round <br />Exhibit at CED 2022 Dubai</React.Fragment>,
};

const frame100000126132Data = {
    spanText1: "Q2",
    q12022WhitepaperA: <React.Fragment>Private round<br />Strategic partnerships</React.Fragment>,
    className: "frame-1000001273",
};

const frame100000126133Data = {
    spanText1: "Q3",
    q12022WhitepaperA: <React.Fragment>Cricket NFT pack sale<br />Token generation event <br />Develop P2P Card game</React.Fragment>,
    className: "frame-1000001274",
};

const frame100000126134Data = {
    spanText1: "Q4",
    q12022WhitepaperA: <React.Fragment>Live NFT Marketplace <br />P2P Beta version launch <br />Card to Card game <br />enhancement<br />Exchange listing</React.Fragment>,
    className: "frame-1000001275",
};

const frame10000012781Data = {
    spanText1: "Q3",
    q12022WhitepaperA: <React.Fragment>Basket Ball NFT goes live<br />Live Football NFT game<br />Fantasy sports game new <br />features<br />Base Ball NFT Pack sale<br />Basket Ball NFT game release Beta version</React.Fragment>,
};

const frame10000012782Data = {
    spanText1: "Q4",
    q12022WhitepaperA: <React.Fragment>Base Ball NFT goes live<br />Football NFT game new <br />features<br />Live Basketball NFT game<br />Base Ball NFT game release<br />Beta version</React.Fragment>,
    className: "frame-1000001279",
};

const emailAddressData = {
    emailAddress: "Email Address",
    polygon2: "/img/polygon-2@2x.png",
    arrow1: "/img/arrow-1@2x.png",
};

const footerData = {
    stayConnected: "Stay Connected",
    facebookIcon: "/img/facebook-icon@2x.png",
    iconLinkedin: "/img/linkedin-icon@2x.png",
    mediumIcon: "/img/medium-icon@2x.png",
    youtubeIcon: "/img/youtube-icon@2x.png",
};

const mobileData = {
    logo: "/img/logo@2x.png",
    overlapGroup17: "/img/vector-2@2x.png",
    group1000001223: "/img/group-1000001223@mobile.png",
    group1000001222: "/img/group-1000001222@mobile.png",
    live: "Live",
    tradeCubixNftsWithEaseBuySellOrRent: "/img/trade-cubix-nfts-with-ease--buy--sell--or-rent-on-the-cubix-mark@2x.png",
    overlapGroup6: "/img/vector-2-1@2x.png",
    exploreNow: "Explore Now",
    downloadOurFantasyLeagueApp: "Download Our Fantasy League App",
    unleashTheChampionInYou: "/img/unleash-the-champion-in-you@2x.png",
    cubixFantasyLeagueIsARevolutionaryF: "/img/cubix-fantasy-league-is-a-revolutionary-fantasy-sports-platform-@2x.png",
    sports_Esports1: "/img/sports-esports@mobile.png",
    sports_Esports2: "/img/sports-esports-1@2x.png",
    multipleGameModes: "Multiple Game Modes",
    sports_Cricket1: "/img/sports-esports@mobile.png",
    sports_Cricket2: "/img/sports-cricket-1@2x.png",
    multipleSports: "Multiple Sports",
    nftBased: "Nft Based",
    overlapGroup10: "/img/sports-esports@mobile.png",
    token: "/img/token-1@2x.png",
    earnAndPlayWithCubix: "Earn And Play With $cubix",
    group1000001297: "/img/group-1000001297@2x.png",
    overlapGroup16: "/img/vector-3@2x.png",
    websiteGroundCurrentView1: "/img/website-ground-current-view-1@mobile.png",
    legendaryNftCard1: "/img/legendary-nft-card@mobile.png",
    legendaryNftCard2: "/img/legendary-nft-card-1@mobile.png",
    bolt: "/img/bolt@mobile.png",
    p2PNftCardBattle: "/img/p2p-nft-card-battle@2x.png",
    joinCubixFantasyL: "Join Cubix Fantasy League. Experience Nft-based Fantasy Sports. Revolutionize Your Gaming Experience.",
    overlapGroup11: "/img/vector-2-2@2x.png",
    playNow: "Play Now",
    overlapGroup12: "/img/vector-2-3@2x.png",
    tutorial: "Tutorial",
    upcomingGames: "/img/upcoming-games@2x.png",
    overlapGroup: "/img/mask-group@mobile.png",
    title1: "Predict & Win",
    asset1Win1: "/img/asset-1win-1@mobile.png",
    vector3: "/img/vector-3-1@2x.png",
    predictionGame: "Prediction Game",
    maximizeYourChance: "Maximize Your Chances Of Success By Correctly Predicting The Winner.",
    overlapGroup2: "/img/mask-group-1@mobile.png",
    vector2: "/img/vector-1@2x.png",
    vector4: "/img/vector-4-1@2x.png",
    metaverse: "Metaverse",
    createAVirtualSpo: "Create A Virtual Sports Team In The Cubix Metaverse, Compete With Nfts, Win Rewards.",
    group1000001272: "/img/mask-group-2@mobile.png",
    vector5: "/img/vector-5-1@2x.png",
    simulation: "Simulation",
    joinTheExcitement: "Join The Excitement And Participate In Simulation Sports Using Nfts.",
    overlapGroup3: "/img/vector-2-6@2x.png",
    upcoming: "Upcoming",
    group10000012521: "/img/group-1000001252@mobile.png",
    group1000001248: "/img/group-1000001208-1@mobile.png",
    logo111: "/img/logo--1--1-1@mobile.png",
    group1000001254: "/img/group-1000001254@mobile.png",
    group1000001263: "/img/vector-10-2@2x.png",
    group1000001264: "/img/vector-10-2@2x.png",
    overlapGroup20: "/img/vector-4@2x.png",
    coin22: "/img/coin2-2.gif",
    cubixToken: "/img/-cubix-token@2x.png",
    cubixIsAUtilityT: "Cubix Is A Utility Token Used In The Cubix Ecosystem For Various Purposes Such As Gameplay Rewards, Staking, And Liquidity Pool Farming. It Can Be Earned By Playing Games Or Bought On Bitmart Exchange.",
    overlapGroup13: "/img/vector-2-2@2x.png",
    buyNow: "Buy Now",
    overlapGroup14: "/img/vector-2-3@2x.png",
    smartContract: "Smart Contract",
    featuredIn: "/img/featured-in@2x.png",
    cryptoIndex: "/img/crypto-index@2x.png",
    group10000012522: "/img/group-1000001252-1@mobile.png",
    group1000001251: "/img/group-1000001204@mobile.png",
    group1000001245: "/img/group-1000001245@mobile.png",
    group1000001208: "/img/group-1000001208@mobile.png",
    logo112: "/img/vector-10-2@2x.png",
    overlapGroup1: "/img/vector-10-2@2x.png",
    coinrankingLogoWhite1: "/img/vector-10-2@2x.png",
    roadmap: "Roadmap",
    overlapGroup4: "/img/vector-13@2x.png",
    vector14: "/img/vector-14@2x.png",
    vector15: "/img/vector-10-2@2x.png",
    vector16: "/img/vector-10-2@2x.png",
    spanText1: "Q1",
    spanText2: " 2023",
    spanText3: "Cubix",
    spanText4: <React.Fragment> visa card<br /></React.Fragment>,
    spanText5: "Cubix",
    spanText6: <React.Fragment> hardware wallet<br />Football NFT Pack Sale<br />Live P2P card game <br />Football NFT goes to live <br />NFT based fantasy game release Beta version</React.Fragment>,
    vector9: "/img/vector-10-2@2x.png",
    spanText7: "Q2",
    spanText8: " 2023",
    q12022WhitepaperA: <React.Fragment>Basket Ball NFT pack Sale <br />Live NFT based  fantasy game<br />P2P game enhancement &amp; <br />new features <br />Football NFT game  release <br />Beta version</React.Fragment>,
    vector10: "/img/vector-10-2@2x.png",
    vector11: "/img/vector-10-2@2x.png",
    vector12: "/img/vector-10-2@2x.png",
    line2: "/img/line-2.png",
    Container: "/img/vector-5@2x.png",
    joinOurCommunity: "/img/join-our-community@2x.png",
    joinOurRobustComm: "Join Our Robust Community Of Nft Collectors, Metaverse Cricketers, & Top P2e Earners. Participate In Our Discord Discussions!",
    group1000001220: "/img/group-1000001220@2x.png",
    makeConnectionWithMembers: <React.Fragment>Make Connection<br />with Members</React.Fragment>,
    group1000001221: "/img/group-1000001221@mobile.png",
    catchTheLatestNews: <React.Fragment>Catch The<br />latest News</React.Fragment>,
    title2: "Marketplace",
    title3: "Card Battle",
    title4: "Fantasy Sports",
    spanText9: "$Cubix ",
    spanText10: "Token",
    title5: "Light Paper",
    title6: "White Paper",
    title7: "Pitch Deck",
    affiliateMarketing: "Affiliate Marketing",
    title8: "About Us",
    title9: "Contact Us",
    group5436: "/img/group-5436@mobile.png",
    title10: "Copyright  2022 CUBIX Pro",
    title11: "Terms | Privacy Policy",
    group1000001266Props: group1000001266Data,
    group1000001302Props: group1000001302Data,
    group1000001202Props: group1000001202Data,
    group1000001205Props: group1000001205Data,
    group1000001204Props: group1000001204Data,
    group1000001256Props: group1000001256Data,
    frame100000126131Props: frame100000126131Data,
    frame100000126132Props: frame100000126132Data,
    frame100000126133Props: frame100000126133Data,
    frame100000126134Props: frame100000126134Data,
    frame10000012781Props: frame10000012781Data,
    frame10000012782Props: frame10000012782Data,
    emailAddressProps: emailAddressData,
    footerProps: footerData,
};