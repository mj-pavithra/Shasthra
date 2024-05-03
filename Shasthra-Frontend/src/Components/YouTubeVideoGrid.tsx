import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/YouTubeVideoGrid.css';

// Define types for the video data
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
    };
}

// Define types for the component props and state
interface YouTubeVideoGridProps {
    channelId: string;
    apiKey: string;
}

const YouTubeVideoGrid: React.FC<YouTubeVideoGridProps> = ({ channelId, apiKey }) => {
    const [videos, setVideos] = useState<VideoData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch videos from YouTube API
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/search',
                    {
                        params: {
                            part: 'snippet',
                            channelId,
                            maxResults: 9,
                            order: 'date',
                            type: 'video',
                            key: apiKey,
                        },
                    }
                );
                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching videos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [channelId, apiKey]);

    // Handle thumbnail click
    const handleThumbnailClick = (videoId: string) => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    };

    return (
        <div className="youtube-video-grid">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid-container">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="grid-item"
                            onClick={() => handleThumbnailClick(video.id.videoId)}
                        >
                            <img
                                src={video.snippet.thumbnails.medium.url}
                                alt={video.snippet.title}
                                className="thumbnail"
                            />
                            <p className="title">{video.snippet.title}</p>
                        </div>
                    ))}
                    {/* Show a subscribe button if there are fewer than 9 videos */}
                    {videos.length < 9 && (
                        <div className="subscribe-button">
                            <a
                                href="https://www.youtube.com/channel/UC3z0oXNhmY8ab45WTp4nvwQ"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Subscribe to Mj Pavithra
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default YouTubeVideoGrid;
