import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause, FaForward, FaBackward, FaExpand, FaCompress } from 'react-icons/fa';
import '../Styles/VideoPlayerPopup.css';

interface VideoPlayerPopupProps {
    videoUrl: string;
    onClose: () => void;
}

const VideoPlayerPopup: React.FC<VideoPlayerPopupProps> = ({ videoUrl, onClose }) => {
    const [playing, setPlaying] = useState<boolean>(true);
    const [seekTime] = useState<number>(10); // Fixed seek time to 10 seconds
    const [playbackRate, setPlaybackRate] = useState<number>(1.0);
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    const playerRef = useRef<ReactPlayer>(null);

    const handleSeek = (forward: boolean) => {
        const player = playerRef.current;
        if (!player) return;

        const currentTime = player.getCurrentTime();
        const newTime = forward ? currentTime + seekTime : currentTime - seekTime;
        player.seekTo(newTime);
    };

    return (
        <div className="video-player-popup">
            <div className="video-container">
                <ReactPlayer
                    ref={playerRef}
                    url={videoUrl}
                    playing={playing}
                    playbackRate={playbackRate}
                    width="100%"
                    height={fullScreen ? '100%' : 'auto'}
                    controls
                    onEnded={() => setPlaying(false)}
                />
                <button className="close-button" onClick={onClose}>X</button>
            </div>
            {/* <div className="controls">
                <button onClick={() => setPlaying(!playing)}>{playing ? <FaPause /> : <FaPlay />}</button>
                <button onClick={() => handleSeek(true)}><FaForward /></button>
                <button onClick={() => handleSeek(false)}><FaBackward /></button>
                <select onChange={(e) => setPlaybackRate(parseFloat(e.target.value))} value={playbackRate}>
                    <option value="0.75">0.75x</option>
                    <option value="1.0">1.0x</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="1.75">1.75x</option>
                    <option value="2.0">2.0x</option>
                </select>
                <button onClick={() => setFullScreen(!fullScreen)}>{fullScreen ? <FaCompress /> : <FaExpand />}</button>
            </div> */}
        </div>
    );
};

export default VideoPlayerPopup;
