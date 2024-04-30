import React, { useState, useEffect } from "react";
import "../Styles/MiddleNav.css";

interface MiddleNavProps {
    segments: string[];
}

const MiddleNav: React.FC<MiddleNavProps> = ({ segments }) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Toggle the dropdown menu
    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    // Navigation functions
    const loadSignIn = () => {
        window.location.href = "/signin";
    };

    const loadSignUp = () => {
        window.location.href = "/signup";
    };

    return (
        <div className="middle-nav">
            {/* Large navigation */}
            <div className="middle-nav-max">
                {segments.map((segment, index) => (
                    <h1 key={index} className="nav-segments">
                        {segment}
                    </h1>
                ))}
            </div>

            {/* Mobile navigation */}
            <div className={`middle-nav-min ${showDropdown ? "show-dropdown" : ""}`}>
                <button className="dropdown-button" onClick={toggleDropdown}>
                    Menu
                </button>
                <div className={`dropdown-content ${showDropdown ? "show" : ""}`}>
                    {segments.map((segment, index) => (
                        <h1 key={index} className="nav-segments-min">
                            {segment}
                        </h1>
                    ))}

                    {windowWidth < 968 && (
                        <>
                            <h1 className="nav-segments-min nav-button" onClick={loadSignIn}>
                                Sign In
                            </h1>
                            <h1 className="nav-segments-min nav-button" onClick={loadSignUp}>
                                Sign Up
                            </h1>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MiddleNav;
