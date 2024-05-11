import React, { useEffect, useState } from "react";
import LeftNav from "../Components/LeftNav";
import MiddleNav from "./MiddleNav";
import RightNav from "../Components/RightNav";

import "../Styles/NavBar.css";

interface NavBarProps {
  segmentsList: string[];
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ segmentsList, className }) => {
  
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${className}`}>
      <LeftNav />
      <MiddleNav segments={segmentsList} />
      {windowWidth > 900 && <RightNav />}
    </div>
  );
};

export default NavBar;
