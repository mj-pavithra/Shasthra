import React from "react";
import '../Styles/HPmiddle.css';
import AboutUs from "../Components/AboutUs";
import Introduction from "../Components/Introduction";
import ModifiedPhotoReel from "../Components/ModifiedPhotoReel";
import YouTubeVideoGrid from "../Components/YouTubeVideoGrid";

const HPmiddle: React.FC = () => {

    const photos = [
        "/youtube-Thumbnail 7.jpg",
        "/youtube-Thumbnail 8.jpg",
        "/youtube-Thumbnail 9.jpg",
        "/youtube-Thumbnail 10.jpg",
        "/youtube-Thumbnail 11.jpg",
        "/youtube-Thumbnail 12.jpg",
        "/youtube-Thumbnail 13.jpg",
        "/youtube-Thumbnail 14.jpg",
    ];
    return (
        <div>
            <AboutUs/>
            <ModifiedPhotoReel photos={photos} />
            <YouTubeVideoGrid
                channelId="UCV1TbG7QfpMVIKKp6ewqT6Q"
                apiKey="AIzaSyBjc5_ztmiXI3mOaizTceIqUOfWLZUMbRk"
            />
            <Introduction/>
        </div>
    );
}

export default HPmiddle;