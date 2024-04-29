import React, { useState, useEffect } from "react";
import "../Styles/ModifiedPhotoReel.css";

interface PhotoReelProps {
    photos: string[];
}

const ModifiedPhotoReel: React.FC<PhotoReelProps> = ({ photos }) => {
    // State to track the current photo index
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // Define the auto-slide interval (in milliseconds)
    const slideInterval = 5000; // 2 seconds

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

    // Calculate the indices of the previous, current, and next photos
    const prevPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    const nextPhotoIndex = (currentPhotoIndex + 1) % photos.length;

    return (
        <div className="photo-reel">
            {/* Left button */}
            <button className="reel-button left-button" onClick={goToPreviousPhoto}>
                &#9664; {/* Left arrow symbol */}
            </button>

            {/* Middle container for three photos */}
            <div className="photo-container">
                {/* Previous photo in the first slot */}
                <div className="prev-photo-container">
                    <img
                        src={photos[prevPhotoIndex]}
                        alt={`Previous Photo ${prevPhotoIndex + 1}`}
                        className="prev-photo"
                    />
                </div>

                {/* Current photo in the middle slot */}
                <div className="current-photo-container">
                    <img
                        src={photos[currentPhotoIndex]}
                        alt={`Current Photo ${currentPhotoIndex + 1}`}
                        className="current-photo"
                    />
                </div>

                {/* Next photo in the third slot */}
                <div className="next-photo-container">
                    <img
                        src={photos[nextPhotoIndex]}
                        alt={`Next Photo ${nextPhotoIndex + 1}`}
                        className="next-photo"
                    />
                </div>
            </div>

            {/* Right button */}
            <button className="reel-button right-button" onClick={goToNextPhoto}>
                &#9654; {/* Right arrow symbol */}
            </button>
        </div>
    );
};

export default ModifiedPhotoReel;
