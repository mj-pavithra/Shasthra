import React, { useEffect, useState } from "react";
import LeftNav from "../Components/LeftNav";
import MiddleNav from "./MiddleNav";
import RightNav from "../Components/RightNav";

import "../Styles/NavBar.css";

// Define an interface for the component props
interface NavBarProps {
  segmentsList: string[]; // Expected to be an array of strings
}

const NavBar: React.FC<NavBarProps> = ({ segmentsList }) => {
  // State to track the window width
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Effect hook to add and remove the resize event listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <LeftNav className="nav-part" />
      <MiddleNav className="nav-part" segments={segmentsList} />
      {/* Conditionally render RightNav based on window width */}
      {windowWidth > 900 ? <RightNav className="nav-part" /> : null}
    </div>
  );
};

export default NavBar;
