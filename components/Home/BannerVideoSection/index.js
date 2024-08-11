import React from "react";

function BannerVideoSection(props) {

    return (
        <>
            <video
                src="https://cdn.animaapp.com/projects/63e3703b26489d74e6b2e046/files/with_bg.mp4"
                loop
                autoPlay="autoplay"
                playsInline
                muted
            ></video>
        </>
    );
}

export default BannerVideoSection;
