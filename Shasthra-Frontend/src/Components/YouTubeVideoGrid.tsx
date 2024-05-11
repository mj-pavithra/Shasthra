import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/YouTubeVideoGrid.css';
import LoadingMessage from '../Components/LoadingMessage';
import VideoPlayerPopup from './VideoPlayerPopup';

// Define types for playlists and videos
interface VideoData {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
        resourceId:{videoId: string;};
    };
}

interface PlaylistData {
    id: string;
    snippet: {
        title: string;
    };
}

interface YouTubeVideoGridProps {
    channelId: string;
    apiKey: string;
}

const YouTubeVideoGrid: React.FC<YouTubeVideoGridProps> = ({ channelId, apiKey }) => {
    const [playlists, setPlaylists] = useState<PlaylistData[]>([]);
    const [videosByPlaylist, setVideosByPlaylist] = useState<Record<string, VideoData[]>>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Fetch playlists from YouTube API
    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/playlists',
                    {
                        params: {
                            part: 'snippet',
                            channelId,
                            maxResults: 20,
                            key: apiKey,
                        },
                    }
                );
                setPlaylists(response.data.items);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, [channelId, apiKey]);

    // Fetch videos from each playlist
    useEffect(() => {
        const fetchVideosByPlaylist = async () => {
            if (playlists.length === 0) return;

            const playlistVideos: Record<string, VideoData[]> = {};

            for (const playlist of playlists) {
                try {
                    const response = await axios.get(
                        'https://www.googleapis.com/youtube/v3/playlistItems',
                        {
                            params: {
                                part: 'snippet',
                                playlistId: playlist.id,
                                maxResults: 9,
                                key: apiKey,
                            },
                        }
                    );
                    console.log(response.data.items);
                    playlistVideos[playlist.id] = response.data.items;
                } catch (error) {
                    console.error('Error fetching videos:', error);
                }
            }

            setVideosByPlaylist(playlistVideos);
            setLoading(false);
        };

        fetchVideosByPlaylist();
    }, [playlists, apiKey]);

    // Handle thumbnail click

    const handleThumbnailClick = (videoId: string) => {
        console.log(videoId);
        setSelectedVideo(videoId);
    };


    // Close the video popup
    const handleCloseVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="youtube-video-grid">
            {loading ? (
                <LoadingMessage />
            ) : (
                <>
                    <div className="grid-container">
                        {playlists.map((playlist, playlistIndex) => (
                            <div key={playlistIndex} className="playlist-row">
                                <h3 className="playlist-title">{playlist.snippet.title}</h3>
                                <div className="playlist-videos">
                                    {videosByPlaylist[playlist.id]?.map((video, videoIndex) => (
                                        <div
                                            key={videoIndex}
                                            className="grid-item"
                                            onClick={() => handleThumbnailClick(video.snippet.resourceId.videoId)}
                                        >
                                            <img
                                                src={video.snippet.thumbnails.medium.url}
                                                alt={video.snippet.title}
                                                className="thumbnail"
                                            />
                                            <p className="title">{video.snippet.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="subscribe-button">
                            <a
                                href="https://www.youtube.com/channel/UC3z0oXNhmY8ab45WTp4nvwQ"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Subscribe to Ayusha Shasthraka                            </a>
                        </div>
                    </div>
                    {selectedVideo && (
                        <VideoPlayerPopup
                            videoUrl={`https://www.youtube.com/watch?v=${selectedVideo}`}
                            onClose={handleCloseVideo}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default YouTubeVideoGrid;
