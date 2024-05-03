import React from 'react';
import '../Styles/LoadingMessage.css';

const LoadingMessage: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="loading-dots">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>
            <p className="loading-text">Loading...</p>
        </div>
    );
};

export default LoadingMessage;
