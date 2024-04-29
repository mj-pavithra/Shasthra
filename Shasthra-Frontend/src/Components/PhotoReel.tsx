import React, { useState, useEffect } from "react";
import "../Styles/PhotoReel.css";

interface PhotoReelProps {
    photos: string[];
}

const PhotoReel: React.FC<PhotoReelProps> = ({ photos }) => {
    // State to track the current photo index
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // Define the auto-slide interval (in milliseconds)
    const slideInterval = 3000;

    // Automatic slide interval
    useEffect(() => {
        // Set up automatic slide interval
        const intervalId = setInterval(() => {
            // Move to the next photo
            setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, slideInterval);

        // Cleanup interval on unmount
        return () => clearInterval(intervalId);
    }, [photos.length]);

    // Handlers for navigating the photos
    const goToPreviousPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    const goToNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    return (
        <div className="photo-reel">
            {/* Display the current photo */}
            <div className="photo-container">
                <img src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} className="photo" />
            </div>

            {/* Navigation buttons */}
            <button className="reel-button left-button" onClick={goToPreviousPhoto}>
                &#9664; {/* Left arrow symbol */}
            </button>
            <button className="reel-button right-button" onClick={goToNextPhoto}>
                &#9654; {/* Right arrow symbol */}
            </button>
        </div>
    );
};

export default PhotoReel;
