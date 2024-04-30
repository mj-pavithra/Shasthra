import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import HPmiddle from "../Containers/HPmiddle";
import Footer from "../Components/Footer";
import '../Styles/HomePage.css';

const navSegments: string[] = ["Home", "About", "Contact", "Services", "Portfolio"];
console.log("HomePage loaded.");
const HomePage: React.FC = () => {
    // State to track the visibility of the NavBar
    const [showNavBar, setShowNavBar] = useState<boolean>(true);
    const scrollThreshold = 200; // Scroll threshold in pixels

    // Scroll event handler
    const handleScroll = () => {
        console.log("Scrolling event triggered.");

        const scrollPosition = window.scrollY;

        console.log("Current scroll position:", scrollPosition);

        const shouldShowNavBar = scrollPosition <= 0 || scrollPosition >= scrollThreshold;

        console.log("Should show NavBar:", shouldShowNavBar);

        // Update state only if needed
        if (shouldShowNavBar !== showNavBar) {
            setShowNavBar(shouldShowNavBar);
            console.log("NavBar visibility changed to:", shouldShowNavBar);
        }
    };
    console.log("NavBar visibility:");

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener
        return () => {
            console.log("Removing scroll event listener.");
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showNavBar]);

    return (
        <div className="HomePage">
            {/* Pass class based on NavBar visibility */}
            <NavBar segmentsList={navSegments} className={showNavBar ? "navbar-visible" : "navbar-hidden"} />
            <HPmiddle />
            <Footer />
        </div>
    );
};

export default HomePage;